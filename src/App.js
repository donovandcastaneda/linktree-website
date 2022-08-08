import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

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
        name: "my open source Github",
        url: "http://github.com/donovandcastaneda",
        icon: "github",
      },
      {
        name: "follow me on twitter",
        url: "http://twitter.com/donovandcastaneda",
        icon: "twitter",
      },
    ],
  };

  return (
    <div className="font-Snippet">
      <div className="m-6">
        <div className="flex align-items-center justify-content-center">
          <Avatar image={data.image} size="xlarge" shape="circle"></Avatar>
          <h1 className="m-2">{data.name}</h1>
        </div>

        <div className="flex align-items-center justify-content-center p-2">
          <p>{data.bio}</p>
        </div>

        <div className="flex align-items-center justify-content-center m-2 ">
          <div className="flex flex-column ">
            {data.links.map((link) => (
              <Button className="m-2">
                <i className={`pi pi-${link.icon} px-3 `}></i>
                {link.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
