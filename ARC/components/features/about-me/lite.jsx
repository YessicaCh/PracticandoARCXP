import getProperties from 'fusion:properties';
import { useAppContext } from 'fusion:context';


const AboutMe = () => {
    const appContext = useAppContext();
    console.log(appContext);
    const { nombre } = getProperties("rpalatam");
    return (
        <>
        <h2> Sobre mi </h2>
        <p>(nombre)</p>
        </>
    )
};

AboutMe.label = 'Sobre mi';
export default AboutMe;

// 
// import getProperties from "fusion:properties";

// const AboutMe = () => {
//   const { nombre } = getProperties("rpalatam");
//   return (
//     <>
//       <h2>Sobre mi</h2>
//       <p>{nombre}</p>
//     </>
//   );
// };

// AboutMe.label = "Sobre Mi";

// export default AboutMe;