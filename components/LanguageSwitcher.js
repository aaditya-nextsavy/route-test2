'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'ar', label: 'Arabic' },

    ];

    const currentLocale = pathname.split('/')[1];

    const handleChange = (e) => {
        const newLocale = e.target.value;
        const restOfPath = pathname.split('/').slice(2).join('/');
        router.push(`/${newLocale}/${restOfPath}`);
    };

    return (
        <div className='language-switcher'>
            <select onChange={handleChange} value={currentLocale}>
                {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                        {lang.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
