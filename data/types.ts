export type Store = {
    id: string;
    owner_id: string;
    name: string;
    logo_url?: string;
    cover_url?: string
    about: string;
    currency: {
        code: string;
        symbol: string;
        name: string;
    };
    taxes?: { id: string; name: string; value: number; type: 'pct' | 'amt' }[],
    extra_charges?: { id: string; name: string; value: number; type: 'pct' | 'amt' }[],
    roles: { [uid: string]: string }
    members: {
        [uid: string]: {
            active: boolean;
            role: 'admin' | 'manager' | 'staff';
        }
    }

}