export interface GalleryItem {
    id: string;
    title: string;
    artist: string;
    likes: number;
    image: string;
    technique: string;
    price: number;
    duration: string;
    products: string;
    reviews: number;
    tags: string[]; // e.g. 'Minimalist', 'Trending'
}

export const GALLERY_DATA: GalleryItem[] = [
    {
        id: '1',
        title: 'Bridal Lace',
        artist: 'Sarah J.',
        likes: 245,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGqxZJKdwBfIE5szL_-aVopb-3BO-HebkHJS9oU_n7l1JTTJXxmrm-UpaTgpWMBUJveNKyNT24Hu0lSKMClAhL99KJXOFy5cS5Cp8KIAsxF4F0MDCgLRVApdDxk_ksZEqVSBUHzuZUw4kJU4RNRE9Oux-DLwFpL4UumZqbnXyGDMODPct7BWqBFGsl7ms8NTd_QKIsYOk8OBBKHuXlpJoNrYj81nXKflb-Aot9F0Hgidzm_q5tzJMqjMcY9GF9qiWyiYdHqPqMKxVD',
        technique: 'Intricate hand-painted lace design on a soft white base, perfect for weddings.',
        price: 120.00,
        duration: '120 - 150 mins',
        products: 'Premium Gel, Micro-detail Brush',
        reviews: 320,
        tags: ['Nail Design', 'French Nails']
    },
    {
        id: '2',
        title: 'Color Swirls',
        artist: 'Mike T.',
        likes: 189,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgqG-iD6goPv3jYYwP5fyhtoCe0KRY2t6g8zTgddBrHJNBtHcRoLc_7CT_j3Jq3e32ENVyxOAZfgNvX8A8a0ooHGBwe_JiY-hg2fU0hf49FyV0-Bx1mpKVslXUU-fBS5gEI_57EcqTXER_fe472376wXjJ4RtFROtWjdwdbfPIri83ndBf69Udtr1TM9OX0IOKkvT9g4Im6ovbkdtaScMCjbUIV8UugLM7PyjPz8KHnjJtkbojxQMH7WFDa0g1oTNISSXQB7t3_bZD',
        technique: 'Abstract swirl patterns using a vibrant color palette for a fun, artistic look.',
        price: 95.00,
        duration: '90 - 120 mins',
        products: 'Gel Polish, Dotting Tool',
        reviews: 150,
        tags: ['Nail Design', 'Gel Polish']
    },
    {
        id: '3',
        title: 'Rose Quartz',
        artist: 'Elena R.',
        likes: 342,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2z0vYTN3ThDtJRfKTm82FrD8gHDTbmbWY497pBsFzAqmQUDRIOKwSsjCGQ1yoL315gDRu6Qh9mCgB-XaMxHpDI69DuGQGcxq-qDZuSZ3VDMGzdWpnXRQBb3lZLXkicWnXJA08ABX86ce52oVHAmf3a8GLAefpepBONH_Mvd0TTmE26bpfVEPfygMa6wgn7BYUdYy8CYZhYR1BDFCnIum7ufjxprr5ERBnDwcbViZINOFm-jPxr2ItO7_ECYBxLNIBpNfmb0WCo8M3',
        technique: 'Soft pink marble effect resembling rose quartz crystal, radiating positive energy.',
        price: 85.00,
        duration: '90 - 105 mins',
        products: 'Sheer Gel, Marble Ink',
        reviews: 410,
        tags: ['Gel & Ombre', 'Nail Design']
    },
    {
        id: '4',
        title: 'Golden Touch',
        artist: 'Jessica W.',
        likes: 512,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFqbsEn4Q128gko-jaPSYpCJqrHmStlX49RVd5o0VRzhBKkWS_X-kTbnIlFP4YfrngL_Zd9bdaWb7ZTJT5OOkaZgQm2CHEneXFd5ahDPNpo2HLMD4lQ-D8_-D1UVKjl7u4ZQRIa6a5igHpY7qe2r51dgrucqiqz9SMoQFZAH6ga6Td8e7Bzojp7AnvcAJleg7JxX26LsnyrjdLh3td-SPjIum-WvjEU0S6pr3HEZ-T6Sf_AVr9t-i7aMv8QawDt1i8iY0JouwoENRV',
        technique: 'A minimalist masterpiece featuring a sheer nude base coat, perfectly matched to your skin tone, accentuated with hand-painted 24k gold leaf lines.',
        price: 85.00,
        duration: '90 - 105 mins',
        products: 'Japanese Gel, 24k Leaf',
        reviews: 512,
        tags: ['Nail Design', 'Gel Polish']
    },
    {
        id: '5',
        title: 'Neon Nights',
        artist: 'Alex K.',
        likes: 156,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTb7IuqjA5A5ldgn2wHsoNLQq97M5g4SO59tQ7fC5JESst2RJAI0r_RU8-OQ0GkmE4ysb6ULEE2NuFcJirddznCTqUusUH3wNb01VTNE9OgoB-AKQHZWtKfOK0JwFklWSxN2P9gtFOihaoLwRJpod8NHdAP-_ZP2aKAqmLU4s3TXjqY65gflSaUDf9DHwz16XSwAFyJw9TN-XSs0w0lbt4Iauadr3ChzjmIuO7Ilu55Lc2w7MSRryXv0z5OIrY8kgn9WoTEiV6RV7o',
        technique: 'Electrifying neon green nails that glow under UV light, perfect for parties.',
        price: 90.00,
        duration: '75 - 90 mins',
        products: 'Neon Pigment, Glossy Top Coat',
        reviews: 80,
        tags: ['Gel Polish', 'Nail Design']
    },
    {
        id: '6',
        title: 'Classic French',
        artist: 'Sarah J.',
        likes: 892,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWGacq-lPBRHV-fU4A-1fu9n-7raa00xRt2iiHuHTcGB_NI4ZRzcMFmfq-O_nWOfIuPwOGFPm5kV1ZH2yVpgZD4dNxJqfAO10hfXPEzQ0nJVkU9cuOWXAKAo5D_AV_Cp3KYGWVBTmTX3bqMQQ-9LSwg2O0bwCF7hMNVSWrVQ7W9ULAoQIpI_FEPPKj1s1a445vmkVYfoYccVwUPbuuoclFj_l339EXSv-mAK81rj05hJq4e7KvScQCGYLRTCoAju3GBvvByMULoDHo',
        technique: 'Timeless French manicure with crisp white tips and a natural pink base.',
        price: 75.00,
        duration: '60 - 75 mins',
        products: 'Classic Gel Kit',
        reviews: 1200,
        tags: ['French Nails', 'Nail Polish']
    },
    {
        id: '7',
        title: 'Geometric Blue',
        artist: 'Mike T.',
        likes: 113,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQSQKAeN66_uP8a42jna6nVEhdAaeRrn0pJ9IB1defwVPrp8GPAIB96MOkyE5Wtbjg1CPHv96Vt01WYz6Q0ksQ4F0UTEQgxF4IrFQ587Z8TyHMsHbjOq2TceNPTQZ98uXKYBhxg4k1urTuJ56O-XXrV8GsaRDyHCFIkvPflgXu03Rircvf6psEq9FD5rbU82ZeFfVZTrqkOgxVCwLT9gF16SkUIblBdp1VGYKmp4JCHw5klbfnSRxCXa5ICf5Sq-yIJr1fR31ncG6x',
        technique: 'Sharp geometric patterns in various shades of blue with metallic accents.',
        price: 100.00,
        duration: '100 - 120 mins',
        products: 'Blue Gel Polish, Striping Tape',
        reviews: 95,
        tags: ['Nail Design', 'Gel Polish']
    },
    {
        id: '8',
        title: 'Midnight Matte',
        artist: 'Elena R.',
        likes: 421,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnhKRJyH2A5sXd70MGlfS0JoGVmuqWYlZbVB0HeOjkqhx4jGDfEmzeaDOYhTdlZfbLyjB0fJdBDMFMfvxhJgpmbyaTfc9f4_r3xq_Hgz0bDD50r_GabG2CA6T0EBu3GgelvRFRDwHFFd31FJTnqbGclOB-gfzEtgU3_JIQxWgp2kuxqKVGB2jEl4uga6yKvZYqkEzEkiwzR5F3cmvcaXHAHDOT08RN9Gi_uQm6Fo7gHDreSAGnHiBHbRsvJwLxlo8iK-W-Qp9G-vrx',
        technique: 'Deep red wine color with a velvety matte finish for a sophisticated look.',
        price: 80.00,
        duration: '60 - 75 mins',
        products: 'Dark Gel, Matte Top Coat',
        reviews: 350,
        tags: ['Nail Polish', 'Acrylic Nails']
    },
    {
        id: '9',
        title: 'Stardust',
        artist: 'Jessica W.',
        likes: 672,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLentUdEMVUiNUEB6Iq4mKOeszBI_qaCSTJg__YU-WT6efsHxK2a5pq_ZG2oW_8ID7OpnY0rmKvNVufYuOYA4U3rR4x1rEkVtRgsq_19SVXW35BR6Bh1dzuPUsCvzQAf804eXLAkyf1EBcXigg8pzNIacPC6iJMBCksMuqL6P-P1ypYBQ4byYUGM7Xb0PAuIJp7aOK75k69Lu2fg2vuaVQ5ckL-Qcm7iMGnESCTiO_KOUQO1uj1dU63B2Il_qPiCpTRhy6jFe3fxyN',
        technique: 'Full coverage silver glitter that sparkles intensely under any light.',
        price: 95.00,
        duration: '75 - 90 mins',
        products: 'Glitter Gel, High-Gloss Top',
        reviews: 600,
        tags: ['Mylar Nails', 'Nail Design']
    }
];
