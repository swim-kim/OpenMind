import React from "react";
import { ReactComponent as ArrowdownSVG } from "../assets/icon/Arrow-down.svg";
import { ReactComponent as ArrowleftSVG } from "../assets/icon/Arrow-left.svg";
import { ReactComponent as ArrowrightSVG } from "../assets/icon/arrow-right.svg";
import { ReactComponent as ArrowupSVG } from "../assets/icon/Arrow-up.svg";
import { ReactComponent as CloseSVG } from "../assets/icon/Close.svg";
import { ReactComponent as EditSVG } from "../assets/icon/Edit.svg";
import { ReactComponent as FacebookSVG } from "../assets/icon/Facebook.svg";
import { ReactComponent as KakaotalkSVG } from "../assets/icon/Kakaotalk.svg";
import { ReactComponent as LinkSVG } from "../assets/icon/Link.svg";
import { ReactComponent as MessagesSVG } from "../assets/icon/Messages.svg";
import { ReactComponent as MoreSVG } from "../assets/icon/More.svg";
import { ReactComponent as PersonSVG } from "../assets/icon/Person.svg";
import { ReactComponent as ThumbsdownSVG } from "../assets/icon/thumbs-down.svg";
import { ReactComponent as ThumbsupSVG } from "../assets/icon/thumbs-up.svg";

const Arrowdown = (props) => {
  return <ArrowdownSVG {...props} />;
};

const Arrowleft = (props) => {
  return <ArrowleftSVG {...props} />;
};

const Arrowright = (props) => {
  return <ArrowrightSVG {...props} />;
};

const Arrowup = (props) => {
  return <ArrowupSVG {...props} />;
};

const Close = (props) => {
  return <CloseSVG {...props} />;
};

const Edit = (props) => {
  return <EditSVG {...props} />;
};

const Facebook = (props) => {
  return <FacebookSVG {...props} />;
};

const Kakaotalk = (props) => {
  return <KakaotalkSVG {...props} />;
};

const Link = (props) => {
  return <LinkSVG {...props} />;
};

const Messages = (props) => {
  return <MessagesSVG {...props} />;
};

const More = (props) => {
  return <MoreSVG {...props} />;
};

const Person = (props) => {
  return <PersonSVG {...props} />;
};

const Thumbsdown = (props) => {
  return <ThumbsdownSVG {...props} />;
};

const Thumbsup = (props) => {
  return <ThumbsupSVG {...props} />;
};
const Icon = {
  Arrowdown,
  Arrowleft,
  Arrowright,
  Arrowup,
  Close,
  Edit,
  Facebook,
  Kakaotalk,
  Link,
  Messages,
  More,
  Person,
  Thumbsdown,
  Thumbsup,
};

export default Icon;
