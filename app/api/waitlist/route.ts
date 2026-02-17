import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

function buildWelcomeEmail(): string {
  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8fafc;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
        <!-- Header -->
        <tr>
          <td style="background-color:#0f172a;padding:32px 40px;text-align:center;">
            <h1 style="margin:0;color:#10b981;font-size:28px;font-weight:700;">Crezca</h1>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:40px;">
            <h2 style="margin:0 0 16px;color:#0f172a;font-size:22px;font-weight:600;">¡Bienvenido a Crezca!</h2>
            <p style="margin:0 0 16px;color:#334155;font-size:16px;line-height:1.6;">
              Gracias por unirte a nuestra lista de espera. Ya tienes tu lugar reservado para acceso anticipado.
            </p>
            <p style="margin:0 0 24px;color:#334155;font-size:16px;line-height:1.6;">
              Pronto podrás analizar <strong>más de 40 empresas colombianas</strong> con inteligencia artificial: estados financieros, indicadores clave y análisis profundo, todo en un solo lugar.
            </p>
            <table cellpadding="0" cellspacing="0" style="margin:0 auto 24px;">
              <tr><td align="center" style="background-color:#10b981;border-radius:8px;">
                <a href="https://crezca.ai" target="_blank" style="display:inline-block;padding:14px 32px;color:#ffffff;font-size:16px;font-weight:600;text-decoration:none;">
                  Conocer Crezca
                </a>
              </td></tr>
            </table>
            <p style="margin:0;color:#64748b;font-size:14px;line-height:1.5;">
              Te notificaremos cuando tu acceso esté listo. Mientras tanto, si tienes preguntas, responde a este correo.
            </p>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background-color:#f1f5f9;padding:24px 40px;text-align:center;">
            <p style="margin:0;color:#94a3b8;font-size:13px;">
              &copy; 2026 Crezca. Todos los derechos reservados.
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(request: NextRequest) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    );
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  try {
    const body = await request.json();
    const { email, utm_source, utm_medium, utm_campaign, referral_code } = body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Email invalido' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();

    const { error } = await supabase.from('ai_chat_waitlist').insert({
      email: normalizedEmail,
      company_ticker: '',
      company_name: 'Landing Page',
      source: 'landing_page',
      user_agent: request.headers.get('user-agent') || '',
      utm_source: utm_source || null,
      utm_medium: utm_medium || null,
      utm_campaign: utm_campaign || null,
      referral_code: referral_code || null,
    });

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json({ status: 'already_registered' });
      }
      throw error;
    }

    // Send welcome email (non-blocking — failure does not affect signup)
    try {
      const resendApiKey = process.env.RESEND_API_KEY;
      if (resendApiKey) {
        const resend = new Resend(resendApiKey);
        await resend.emails.send({
          from: 'Sebastian de Crezca <hola@crezca.ai>',
          to: normalizedEmail,
          subject: 'Bienvenido a Crezca — Tu acceso anticipado',
          html: buildWelcomeEmail(),
        });
      }
    } catch (emailErr) {
      console.error('Welcome email error:', emailErr);
    }

    return NextResponse.json({ status: 'success' });
  } catch (err) {
    console.error('Waitlist API error:', err);
    return NextResponse.json(
      { error: 'Error interno' },
      { status: 500 }
    );
  }
}
