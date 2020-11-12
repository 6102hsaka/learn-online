import React from 'react';
import { Col, Row } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import Loading from './LoadingComponent';
import { loadTeachers } from '../redux';
import UserElement from './UserElementComponent';
import { ROLE_TEACHER } from '../shared';

const Teachers = () => {
    const dispatch = useDispatch();
    const { isLoading, teachers, error } = useSelector(state => state.teacher);
    if(!isLoading && (teachers.length === 0) && !error) {
        dispatch(loadTeachers());
    }

    let MyList = <div></div>;
    if(teachers.length>=1) {
        MyList = teachers.map(teacher => <Col sm={6} lg={4} key={teacher.id}><UserElement element={teacher} type={ROLE_TEACHER}/></Col>)
    }
    MyList = <Row>{MyList}</Row>
    return isLoading ? <Loading /> : <div>{error ? Error- {error} : MyList}</div>;
}

export default Teachers;