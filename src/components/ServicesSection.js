import './ServicesSection.css';

import img1 from "../images/ia.webp";
import img2 from "../images/sox.webp";
import img3 from "../images/da.webp";
import img4 from "../images/tax.webp";
import img5 from "../images/aa.webp";
import img6 from "../images/cf.webp";
import img7 from "../images/hr.webp";
import img8 from "../images/it.webp";

const ServicesSection = () => {


  const services = [
    {
      title: "Internal Audit",
      description: "Comprehensive reviews to ensure operational efficiency and compliance.",
      image: img1,
    },
    {
      title: "SOX Compliance",
      description: "Expert guidance to meet Sarbanes-Oxley Act requirements.",
      image: img2,
    },
    {
      title: "Data Analytics",
      description: "Transform data into actionable insights for better decision-making.",
      image: img3,
    },
    {
      title: "Taxation Services",
      description: "Tax planning, filing, and compliance for individuals and businesses.",
      image: img4,
    },
    {
      title: "Auditing and Assurance",
      description: "Independent verification of financial statements for accuracy and compliance.",
      image: img5,
    },
    {
      title: "Corporate Finance",
      description: "Assistance with mergers, acquisitions, and valuations for businesses.",
      image: img6,
    },
    {
      title: "Human Resources Consulting",
      description: "Guidance on recruitment, employee engagement, and HR policies.",
      image: img7,
    },
    {
      title: "IT and Technology Consulting",
      description: "Implementation and management of innovative technology solutions.",
      image: img8,
    },
  ];
  

  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.image} alt={service.title} className="service-image" />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;