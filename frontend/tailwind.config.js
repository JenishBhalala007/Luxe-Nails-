/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#ffc1d0",
                "primary-bold": "#ee2b58",
                "background-light": "#fcf8f9",
                "background-dark": "#221014",
                "accent-nude": "#F5E6CA",
                "text-main": "#333333",
                "accent-rose": "#b76e79",
                "surface-light": "#ffffff",
                "surface-dark": "#2d1b20",
                "text-muted": "#9a4c5e",
                "rose-gold": "#B76E79",
                "rose-gold-hover": "#A05A64",
                "soft-nude": "#F5E6CA",
                "blush-pink": "#FFD1DC",

                "booking-primary": "#fb5179",
                "booking-bg-light": "#f8f5f6",
                "booking-bg-dark": "#230f14",
                "booking-step2-primary": "#ec135b",
                "booking-step3-primary": "#ee2b4b",
                "booking-rose-gold": "#b76e79",
                "booking-soft-beige": "#f5e6ca",
                "booking-beige-lux": "#F5E6CA",
                "booking-blush-pink": "#FFD1DC",
                "booking-rose-gold-light": "#fcecee",

                "dashboard-primary": "#ffd1dc",
                "dashboard-primary-dark": "#dcb8c1",
                "dashboard-rose-gold": "#B76E79",
                "dashboard-bg-light": "#f8f5f6",
                "dashboard-bg-dark": "#230f14",
                "dashboard-text-main": "#1d0c10",
                "dashboard-text-sub": "#6e5d61",

                "appointments-primary": "#ee2b58",
                "appointments-gold": "#d4af37",
                "appointments-bg-light": "#F8F5F2",
                "appointments-card-light": "#FFFFFF",
                "appointments-card-dark": "#2d1b20",
                "appointments-text-main": "#1b0d11",
                "appointments-text-muted": "#9a4c5e",

                "login-charcoal": "#1b0d10",
                "login-rose-gold-light": "#fcf8f9",
                "login-rose-gold-border": "#e7cfd3",

                "register-charcoal": "#1b0d10",
                "register-charcoal-light": "#4a3b3e",
                "register-rose-gold-outline": "#e7cfd3",
                "register-primary-dark": "#d61c3b",

                "worker-primary": "#af6e77",
                "worker-primary-light": "#fcecee",
                "worker-text-muted": "#816569",
                "worker-surface": "#FFFFFF",
                "worker-requests-primary": "#b46a71", // Muted Rose
                "worker-requests-bg-light": "#fcecee", // Soft Blush Pink
                "worker-requests-accent-orange": "#FFF0E0", // Soft Orange
                "worker-requests-card-dark": "#2a2222",
                "worker-reviews-primary": "#b66d74",
                "worker-reviews-gold": "#D4AF37",
                "worker-reviews-bg-content": "#F9F8F6",

                "luxe-bg": "#F9F8F6",
                "luxe-text": "#1b0d11",
                "luxe-text-muted": "#8a7a7e",
                "luxe-gold": "#C5A059",
                "luxe-pink": "#ec1349",
                "luxe-pink-light": "#F3E7EA",
                "luxe-lavender": "#9B8BC8",
                "luxe-orange": "#E88D67",
                "rose-gold-light": "#FBEAEB",
                "luxe-primary-light": "#fdf2f4",
                "luxe-text-secondary": "#9a4c5f",

                // Service Page Colors
                "service-primary": "#df2040",
                "service-primary-soft": "#fcecee",
                "service-rose-gold": "#b76e79",
                "service-rose-gold-light": "#eecdd3",
                "service-text-sub": "#95505c",

                // Gallery Page Colors
                "gallery-primary": "#e83040",
                "gallery-primary-soft": "#e8304010",
                "gallery-rose-gold": "#C59B9B",
                "gallery-rose-gold-light": "#F3E7E8",
                "gallery-text-muted": "#974e54",
            },
            fontFamily: {
                "display": ["Manrope", "sans-serif"],
                "display-2": ["Plus Jakarta Sans", "sans-serif"],
                "serif": ["Playfair Display", "serif"],
                "body": ["Lato", "sans-serif"],
            },
            borderRadius: {
                "lg": "0.75rem",
                "xl": "1.5rem",
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries'),
    ],
}
