export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

    theme: {
        extend: {
            colors: {
                'latorre': {
                    'primary': '#0780FE',
                    'base': '#FFFFFF',
                    'silver': '#C0C0C0',
                    'gray-light': '#E8E8E8',
                    'text': '#2C3E50',
                    'background': '#F5F5F5',
                    'gold': '#B8860B',
                },
            },
            fontFamily: {
                'stencil': ['"Stardos Stencil"', 'serif'],
                'sans': ['Oswald', 'system-ui', 'sans-serif'],
            },
        },
    },

    plugins: [
        require('daisyui'),
        require('tailwind-animations')
    ],

    daisyui: {
        themes: [
            {
                latorre: {
                    'primary': '#0780FE',
                    'primary-content': '#FFFFFF',
                    'secondary': '#B8860B',
                    'secondary-content': '#FFFFFF',
                    'accent': '#C0C0C0',
                    'accent-content': '#2C3E50',
                    'neutral': '#2C3E50',
                    'neutral-content': '#FFFFFF',
                    'base-100': '#FFFFFF',
                    'base-200': '#F5F5F5',
                    'base-300': '#E8E8E8',
                    'base-content': '#2C3E50',
                    'info': '#0780FE',
                    'success': '#10B981',
                    'warning': '#F59E0B',
                    'error': '#EF4444',
                },
            },
        ],
        darkTheme: false
    },
}
