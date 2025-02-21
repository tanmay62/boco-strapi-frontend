import React, { useEffect, useState } from 'react';
import '../styles/ServiceSection.css';

// const services = [
//     {
//         title: 'Conversion Rate Optimization',
//         features: ['Design Optimization', 'Speed Optimization', 'On Page SEO', 'Tech Maintenance & Support'],
//         link: 'https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729b719e3d75143640db60b_CRO.png',
//     },
//     {
//         title: 'UI/UX Design',
//         features: ['Landing Pages', 'Visual Identity(Web & Digital)', 'Icons & Illustrations', 'Assets & Components'],
//         link: 'https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729b719de870e6b0eade322_UX.png',
//     },
//     {
//         title: 'Web Development',
//         features: ['Code & E-commerce Customization', 'Third Party & Custom Apps', 'Front End Development', 'Back end & CMS Setup'],
//         link: 'https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6729b7193510ca1863111ec5_WD.png',
//     }
// ];

const ServiceSection = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:1337/api/services') // Adjust URL based on your Strapi setup
            .then(response => response.json())
            .then(data => setServices(data.data))
            .catch(error => console.error('Error fetching services:', error));
    }, []);
    return (
        <section className="section_services-d2c">
            <div className="case-study-container-d2c">
                <div className="subtitle-h1-center-aligned">Enhance customer experience
                    <br></br>
                    by focusing on the details that matters the most
                </div>
                <div className="services-grid">
                    {services.map((service, idx) => (
                        <div key={idx} className="service-card-d2c s-card-1-d2c">
                            <div className="service-details-d2c">
                                <img loading="eager" src={service.imageUrl} alt="" className="image-208" />
                            </div>
                            <div className="servise-detail-d2c">
                                <div className="sd-title-d2c">
                                    <div className="text-block-79">{service.title}</div>
                                </div>
                                {
                                    service.features.map((feature, idx) => (
                                        <div key={idx} className="sd-features-d2c">
                                            <div className="sd-features--d2c">
                                                <img loading="lazy" src="https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6707981d6373cf86d09d4db5_Vector.svg" alt="" /><div className="text-block-37">{feature}</div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
