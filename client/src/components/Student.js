import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const Student = () => {
	const paperStyle = { padding: "0px 0px", width: 800, margin: "0px auto" };
	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [students, setStudents] = useState([]);
	const classes = useStyles();

	const handleClick = (e) => {
		e.preventDefault();
		const student = { name, address };
		console.log(student);
		fetch("http://localhost:8080/student/add", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(student),
		}).then(() => {
			console.log("New Student added");
		});
	};

	useEffect(() => {
		fetch("http://localhost:8080/student/getAll")
			.then((res) => res.json())
			.then((result) => {
				setStudents(result);
			});
	}, []);

	return (
		<div className="container">
			<div elevation={3} style={paperStyle}>
				<h1>
					<u>Add Student</u>
				</h1>

				<form className={classes.root} noValidate autoComplete="off">
					<TextField
						id="outlined-basic"
						label="Student Name"
						variant="outlined"
						fullWidth
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<TextField
						id="outlined-basic"
						label="Student Adress"
						variant="outlined"
						fullWidth
						value={address}
						onChange={(e) => setAddress(e.target.value)}
					/>
					<button variant="contained" color="secondary" onClick={handleClick}>
						Submit
					</button>
				</form>
			</div>
			<h1>Students</h1>

			<div elevation={3} style={paperStyle}>
				{students.map((student) => (
					<div
						elevation={6}
						style={{ margin: "10px", padding: "15px", textAlign: "left" }}
						key={student.id}
					>
						<hr />
						Id:{student.id}
						<br />
						Name:{student.name}
						<br />
						Address:{student.address}
						<hr />
					</div>
				))}
			</div>
		</div>
	);
};

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
		},
	},
}));

export default Student;
