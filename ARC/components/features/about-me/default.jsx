const AboutMe = () => {
  return (
    <>
    <h2>Sobre mi</h2>
    </>
  );
};

AboutMe.label = "About Me";
export default AboutMe;
// import React from 'react'

// export default ({
//   children,
//   contextPath,
//   deployment,
//   CssLinks,
//   Fusion,
//   Libs,
//   MetaTags
// }) =>
//   <html>
//     <head>
//       <title>Fusion Article</title>
//       <MetaTags />
//       <Libs />
//       <CssLinks />
//       <link rel='icon' type='image/x-icon' href={deployment(`${contextPath}/resources/favicon.ico`)} />
//     </head>
//     <body>
//       <div id='fusion-app'>
//         {children}
//       </div>
//       <Fusion />
//     </body>
//   </html>