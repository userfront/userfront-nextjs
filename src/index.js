import UserfrontReact from "@userfront/react";

const Userfront = {};

for (const attr in UserfrontReact) {
  if (!Userfront[attr]) Userfront[attr] = UserfrontReact[attr];
}

export default Userfront;
