const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Service = require('./models/Service');
const connectDB = require('./config/db');

dotenv.config();

const services = [
    {
        name: 'Basic Manicure',
        description: 'Classic manicure including shaping, cuticle care, and polish.',
        price: 500,
        duration: 30,
        category: 'Manicure',
        imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800'
    },
    {
        name: 'Gel Manicure',
        description: 'Long-lasting gel polish with cuticle care and hand massage.',
        price: 1200,
        duration: 45,
        category: 'Manicure',
        imageUrl: 'https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&q=80&w=800'
    },
    {
        name: 'Acrylic Extensions',
        description: 'Full set of acrylic extensions with gel polish.',
        price: 2500,
        duration: 90,
        category: 'Extensions',
        imageUrl: 'https://images.unsplash.com/photo-1632973547304-fa333907c11f?auto=format&fit=crop&q=80&w=800'
    },
    {
        name: 'Luxury Pedicure',
        description: 'Relaxing spa pedicure with scrub, massage, and polish.',
        price: 1500,
        duration: 60,
        category: 'Pedicure',
        imageUrl: 'https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&q=80&w=800' // Placeholder reuse
    },
    {
        name: 'Nail Art (Per Nail)',
        description: 'Custom nail art design.',
        price: 150,
        duration: 15,
        category: 'Nail Art',
        imageUrl: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800'
    }
];

const seedServices = async () => {
    try {
        await connectDB();

        // Clear existing services
        await Service.deleteMany({});
        console.log('Services cleared.');

        // Insert new services
        await Service.insertMany(services);
        console.log('Services added successfully.');

        process.exit();
    } catch (error) {
        console.error('Error seeding services:', error);
        process.exit(1);
    }
};

seedServices();
