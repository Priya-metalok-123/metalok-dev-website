import { Icon } from "@iconify/react";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Pagination() {
  return (
    <ul className="cs-pagination_box cs-center cs-white_color cs-mp0 cs-semi_bold">
      <li>
        <NavLink
          className="cs-pagination_item cs-center"
          activeClassName="cs-active_link" // Add a custom CSS class for the active link
          to="/blog"
          exact // Add the 'exact' prop to only apply the active class for an exact match
        >
          1
        </NavLink>
      </li>
      <li>
        <NavLink
          className="cs-pagination_item cs-center"
          activeClassName="cs-active_link"
          to="/blogonePage"
        >
          2
        </NavLink>
      </li>
      <li>
        <NavLink
          className="cs-pagination_item cs-center"
          activeClassName="cs-active_link"
          to="/blogTwoPage"
        >
          3
        </NavLink>
      </li>
      <li>
        <NavLink
          className="cs-pagination_item cs-center"
          activeClassName="cs-active_link"
          to="/blogThreePage"
        >
          4
        </NavLink>
      </li>
    </ul>
  );
}
