import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "./index.css";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";

function App() {
  // const colors = {
  //   youtube: "red",
  //   linkedin: "blue",
  //   github: "green",
  // };

  const data = {
    name: "Donovan Castaneda",
    image: "http://github.com/donovandcastaneda.png",
    bio: "Software Engineering Student at University of Kansas City, Missouri",
    links: [
      {
        name: "my open source github",
        url: "http://github.com/donovandcastaneda",
        icon: "github",
      },
      {
        name: "follow me on linkedin",
        url: "http://linkedin.com/donovandcastaneda",
        icon: "linkedin",
      },
      {
        name: "send me a email",
        url: "mailto:donovandcastaneda@gmail.com",
        icon: "envelope",
      },
      {
        name: "follow me on twitter",
        url: "http://twitter.com/donovandcastaneda",
        icon: "twitter",
      },
      {
        name: "follow me on instagram",
        url: "http://instagram.com/donovandcastaneda",
        icon: "instagram",
      },
    ],
  };

  return (
    <div className="m-7">
      <div className="flex align-items-center justify-content-center">
        <Avatar image={data.image} size="xlarge" shape="circle"></Avatar>
        <h1 className="m-3 ">{data.name}</h1>
      </div>

      <div className="flex align-items-center justify-content-center p-2">
        <p>{data.bio}</p>
      </div>

      <div className="flex align-items-center justify-content-center  m-2 ">
        <div className="flex flex-column ">
          {data.links.map((link) => (
            <Button className="m-2 shadow-5 outline">
              <i className={`pi pi-${link.icon} px-3 `}></i>
              {link.name}
            </Button>
          ))}

          <div> </div>
        </div>
      </div>
    </div>
  );
}

export default App;
