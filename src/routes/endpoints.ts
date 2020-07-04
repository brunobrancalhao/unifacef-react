import Cache from "../containers/cache";
import Combustivel from "../containers/combustivel";
import Home from "../containers/home";
import Register from "../containers/register";
import { RouteProps } from "react-router-dom";
import Sobre from "../containers/sobre";
import StarWars from '../containers/star-wars';
import StarWarsDetails from "../containers/star-wars-details";
import Tags from "../containers/tags";

interface EndPointsProps extends RouteProps {
  name?: string;
}

const publicUrl = process.env.PUBLIC_URL;

export const endpoints: EndPointsProps[] = [
  {path: `${publicUrl}/`, component: Home, exact: true},
  {path: `${publicUrl}/home`, name: 'Home', component: Home, exact: true},
  {path: `${publicUrl}/combustivel`, name: 'Combustivel', component: Combustivel, exact: true},
  {path: `${publicUrl}/star-wars`, name: 'Star Wars', component: StarWars, exact: true},
  {path: `${publicUrl}/star-wars/:id`, component: StarWarsDetails, exact: true},
  {path: `${publicUrl}/cache`, name: 'Cache', component: Cache, exact: true},
  {path: `${publicUrl}/tags`, name: 'Tags', component: Tags, exact: true},
  {path: `${publicUrl}/register`, name: 'Register', component: Register, exact: true},
  {path: `${publicUrl}/sobre`, name: 'Sobre', component: Sobre, exact: true},
];