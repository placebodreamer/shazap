import './NavBar.css';

const NavBar = () => {
	return (
		<div className="top-bar">
			<div className="left">
				<img
					src="../src/assets/demo_page/logo.png"
					alt="Logo"
					style={{ width: 40, height: 40, marginLeft: 15, marginTop: 5, marginRight: 15 }}
				/>
				<h1>Area.</h1>
			</div>
			<div className="center">
				<input type="text" placeholder="Search Something" />
				<img src="../src/assets/components/NavBar/icon_search.png" alt="Search" style={{ width: 40, height: 40 }} />
			</div>
			<div className="right">
				<div className="buttons">
					<img
						src="../src/assets/components/NavBar/profile_pic.png"
						alt="Profile"
						style={{ height: 30, width: 30, borderRadius: 100 }}
					/>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
