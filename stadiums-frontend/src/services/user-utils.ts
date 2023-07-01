import * as jose from 'jose';

export function	getUserRole(token: string): string {
    const decoded = jose.decodeJwt(token);
    return decoded.role as string;
}

export function	getUserEMail(token: string): string {
    const decoded = jose.decodeJwt(token);
    return decoded.email as string;
}

export function	getUserId(token: string): string {
    const decoded = jose.decodeJwt(token);
    return decoded.id as string;
}