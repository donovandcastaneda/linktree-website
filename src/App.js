import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
function App() {
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
    <div>
      <Avatar image={data.image} size="xlarge" shape="circle"></Avatar>
    </div>
  );
}

export default App;
