import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import CourseShape from './CourseShape';

const CourseList = ({ listCourses }) => {
  return (
          <table id="CourseList">
          <thead>
              <CourseListRow textFirstCell="Available courses" isHeader={true} />
              <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
          </thead>
          <tbody>
          {listCourses && listCourses.length ? (
              listCourses.map(({ id, name, credit }) => (
                  <CourseListRow key={id}
                              textFirstCell={name}
                              textSecondCell={credit} />
                  )
              )
          ) : (<tr><td colSpan='2'>No course available yet</td></tr>)
          }
          </tbody>
          </table>
  )
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
}
CourseShape.defaultProps = {
  listCourses: []
}
export default CourseList;