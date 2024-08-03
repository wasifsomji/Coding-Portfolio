import React, { useState } from 'react';
import './index.scss';

const Timeline = () => {
  const [events, setEvents] = useState([
    {
      date: "May 2024 - Present",
      title: "The MRG Group | Software Engineering Intern",
      description: [
        "Led the development of the refactored MRG Travel website using Next.js, integrating Google APIs to reduce travel consultant booking times by 99+%.",
        "Configured a CI/CD pipeline with a Dockerized MongoDB test database instance and implemented a comprehensive automated testing strategy for GraphQL resolvers using the Go testing framework, increasing code coverage by 51%.",
        "Migrated 15+ Nest.js endpoints to GraphQL APIs across web and mobile, decreasing response times by 22%",
        "Leveraged Sentry SDK to proactively identify and resolve 15+ bugs in GraphQL API endpoints and React.js frontend features.",
        "Shipped web and mobile features within the AdmitOne Ticketing Platform, employing React.js and React Native to enhance user experience.",
      ]
    },
    {
      date: "July 2024 - Present",
      title: "Shomigo | Mobile Developer",
      description: [
        "Stella | AI Fashion Assistant"
      ]
    },
    {
      date: "May 2024 - July 2024",
      title: "Lottus | Backend Developer (Part-Time)",
      description: [
        "Migrated a static deployment from Heroku to AWS Elastic Beanstalk and designed a CI/CD pipeline to automate the release process, significantly reducing deployment time and enhancing reliability.",
        "Integrated Stripe API into a Node.js backend to allow for user payments, enabling fiat transactions and support for 5+ cryptocurrencies.",
        "Conducted rigorous testing of 15+ custom and third-party APIs using Postman, ensuring compliance with specifications and enhancing system reliability."
      ]
    },
    {
      date: "Feb 2024 - April 2024",
      title: "Khamis Towing and Roadside Assistance | Software Engineer",
      description: [
        "Designed and implemented a full-stack web application designed to manage 300+ customers per month, reducing task downtime by 90%." ,
        "Utilized React.js for the UI, Express.js and Node.js for back-end server operations, and integrated a MongoDB database for effective data storage solutions, ensuring organized data management.",
        "Developed a thorough testing suite of 75+ unit and integration tests using Jest and Supertest."
      ]
    },

    {
      date: "Jun 2023 - Aug 2023",
      title: "Pacific Reach | IT Analyst Intern",
      description: [
        "Efficiently resolved a backlog of <b>500+</b> Helpdesk tickets, leveraging <b>Azure Active Directory</b> and implementing technology upgrades at over <b>20</b> national sites, enhancing system efficiency and user experience.",
        "Developed and executed a detailed plan to deploy two-factor authentication (2FA) for the Pacific Reach organization using Azure’s robust security services, fortifying the security framework for 200+ users. ",
        "Mastered practical skills in motherboard logic and hardware troubleshooting, excelling in component replacement and significantly cutting costs in technology upgrades and replacements by 28%."
      ],
      expanded: false
    }
    
    
  ]);

  const handleItemClick = (index) => {
    setEvents((prevEvents) => {
      const updatedEvents = prevEvents.map((event, idx) => {
        if (idx === index) {
          return { ...event, expanded: !event.expanded };
        }
        return event;
      });
      return updatedEvents;
    });
  };

  return (
    <div className="timeline-container">
      {events.map((event, index) => (
        <div
          className={`timeline-item ${event.expanded ? 'expanded' : ''}`}
          key={index}
          onClick={() => handleItemClick(index)}
        >
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h2>{event.title}</h2>
            {event.expanded ? (
              <div>
                {event.description.map((desc, descIndex) => (
                  <p key={descIndex} dangerouslySetInnerHTML={{ __html: desc }} />
                ))}
              </div>
            ) : (
              <>
                <div className="more">
                  <p>Click for more</p>
                </div>
                <div className="date">{event.date}</div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
