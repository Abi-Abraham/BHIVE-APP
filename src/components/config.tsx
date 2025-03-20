import Community from "../assets/svg/community.svg";
import Gym from "../assets/svg/gym.svg";
import Wifi from "../assets/svg/wifi.svg";
import Coffee from "../assets/svg/coffe.svg";
import Affordable from "../assets/svg/affordable.svg";
import Lounges from "../assets/svg/lounges.svg";
import Time from "../assets/svg/time.svg";
import Sports from "../assets/svg/sports.svg";
import WorkspaceIcon from "../assets/svg/workspace.svg";
import HoneykombIcon from "../assets/svg/honeykomb.svg";
import PlatinumIcon from "../assets/svg/premium.svg";
import CampusIcon from "../assets/svg/campus.svg";
import LabelPremiumIcon from "../assets/svg/label-premium.svg";

export type GetOptions = {
  id: number;
  icon: string;
  title: string;
};

export const getOptions: GetOptions[] = [
  {
    id: 1,
    icon: Community,
    title: "Community Events",
  },
  {
    id: 2,
    icon: Gym,
    title: "Gym Facilities",
  },
  {
    id: 3,
    icon: Wifi,
    title: "High-Speed WiFi",
  },
  {
    id: 4,
    icon: Coffee,
    title: "Cafe & Tea Bar",
  },
  {
    id: 5,
    icon: Affordable,
    title: "Affordable",
  },
  {
    id: 6,
    icon: Lounges,
    title: "Comfort Lounges",
  },
  {
    id: 7,
    icon: Time,
    title: "Quick Booking",
  },
  {
    id: 8,
    icon: Sports,
    title: "Sports Area",
  },
];

type Labels = Record<string, string>;

export const LABELS: Labels = {
  Workspace: WorkspaceIcon,
  Honeykomb: HoneykombIcon,
  Platinum: PlatinumIcon,
  Campus: CampusIcon,
  Premium: LabelPremiumIcon,
};
