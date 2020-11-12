import React  from 'react';
import { Col, Row } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import Loading from './LoadingComponent';
import { loadStudents } from '../redux';
import UserElement from './UserElementComponent';
import { ROLE_STUDENT } from '../shared';

const Students = () => {
    const dispatch = useDispatch();
    const { isLoading, students, error } = useSelector(state => state.student);
    if(!isLoading && (students.length === 0) && !error) {
        dispatch(loadStudents());
    }
    
    let MyList = <div></div>;
    if(students.length>=1) {
        MyList = students.map(student => <Col sm={6} lg={4} key={student.id}><UserElement element={student} type={ROLE_STUDENT} /></Col>);
    }
    MyList = <Row>{MyList}</Row>
    return isLoading ? <Loading /> : <div>{error ? Error- {error} : MyList}</div>;
    
}

export default Students;