import React from "react";
import PropTypes from "prop-types";
import Chip from "material-ui/Chip";
import { getStyle, withDataStyles } from "./withDataStyles";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "left",
    flexWrap: "wrap",
    margin: "0px 16px 0px 16px",
  },
  chip: {
    margin: "8px 8px 0px 0px",
  },
});

class MUIDataTableFilterList extends React.Component {
  static propTypes = {
    /** Data used to filter table against */
    filterList: PropTypes.array.isRequired,
    /** Callback to trigger filter update */
    onFilterUpdate: PropTypes.func,
    /** Extend the style applied to components */
    classes: PropTypes.object,
  };

  render() {
    const { classes, filterList, filterUpdate } = this.props;

    return (
      <div className={classes.root}>
        {filterList.map((item, index) =>
          item.map((data, colIndex) => (
            <Chip
              label={data}
              key={colIndex}
              onRequestDelete={filterUpdate.bind(null, index, data, "checkbox")}
              className={classes.chip}
            />
          )),
        )}
      </div>
    );
  }
}

export default withDataStyles(styles)(MUIDataTableFilterList);