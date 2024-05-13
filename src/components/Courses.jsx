import React from 'react';
import Point from './ProfilePoints/Point';
import { domainExtractor } from '../utils/domainExtractor';

export default function Courses({ courses }) {
  return (
    <>
      <section id="courses" className="about bg-light">
        <div className="container">
          <div className="section-title">
            <h2>My Attended Courses</h2>
          </div>
          <div className="row">
            {courses && courses.map(course => (
              <div key={course.name} className="pt-4 pt-lg-0 content row" data-aos="fade-left">
                <img
                  src={course.logo}
                  className="rounded-squre mb-3 pt-3 col-lg-3 align-middle"
                  style={{ width: 150 }}
                  alt={course.name}
                />
                <div className="col-lg-9 align-middle">
                  <p className="fst-italic">{course.description}</p>
                  <Point point={{ key: course.name, value: course.date }} />
                  <Point point={{ key: 'description', value: course.description }} />
                  <Point point={{ key: '', value: <a href={process.env.PUBLIC_URL+course.url} target="_blank" rel="noopener noreferrer">
                    {domainExtractor(course.url)}
                  </a> }} />
                  <Point point={{ key: '', value: <a href={process.env.PUBLIC_URL + course.image} target="_blank" rel="noopener noreferrer">
                    Certificate
                  </a> }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
