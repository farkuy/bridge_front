import { links } from "./consts/links";
import { Anchor } from "@mantine/core";

export const HeaderLinks = () => {
  return (
    <>
      {links.map((link) => (
        <Anchor key={link.label} href={link.href} size="md">
          {link.label}
        </Anchor>
      ))}
    </>
  );
};
