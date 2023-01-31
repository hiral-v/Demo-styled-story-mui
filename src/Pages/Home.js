import * as React from 'react';
import BaseButton from '../Components/Button/Button';
import InputField from '../Components/InputField/InputField';
const Home = () => {
    return (
        <>
            <BaseButton value="button" variant='contained'/>
            <InputField type="password"/>
        </>
    );
}
export default Home;