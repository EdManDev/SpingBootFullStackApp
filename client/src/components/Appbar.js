import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import MenuIcon from "@material-ui/icons/Menu";

const Appbar = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<header position="static">
				<div>
					<button
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
					>
						<MenuIcon />
					</button>
					<p variant="h6" className={classes.title}>
						Spring Boot React Full Stack Application
					</p>
				</div>
			</header>
		</div>
	);
};

export default Appbar;

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));
