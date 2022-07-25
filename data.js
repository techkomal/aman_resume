var app = angular.module("myApp", []);

app.controller("myAppController", function ($scope, $window) {

	$scope.firstName = 'Aman';
	$scope.lastName = 'Saxena';
	$scope.fullName = $scope.firstName + ' ' + $scope.lastName;
	$scope.imageUrl = 'media/19617.jpg';
	$scope.doj = '2020-10-12';
	$scope.dob = '2000/07/25';
	$scope.about = `I am a Senior System Engineer with almost ${dateDiff($scope.doj)} of experience in technologies like ASP.NET, C#, MVC Developer etc. I have been fortunate to handle large to small-scale web applications.`;
	$scope.website = window.location.href;
	$scope.phone = '+91 829 911 5606';
	$scope.location = 'Kanpur, U.P. INDIA';
	$scope.age = getAge($scope.dob);
	$scope.degree = 'Bachelor of Technology';
	$scope.email = 'amansaxena606@gmail.com';
	$scope.summary = 'ASP.NET Developer || C# and PYTHON Developer || CORE JAVA, SSMS, EF-CORE, SSIS';

	$scope.skills = [
		{ name: 'C#', performance: 90 },
		{ name: 'Python', performance: 90 },
		{ name: 'Core Java', performance: 90 },
		{ name: 'CSS', performance: 90 },
		{ name: 'HTML', performance: 90 },
		{ name: '.NET Core', performance: 80 },
		{ name: 'EF-Core', performance: 90 },
		{ name: 'SSMS', performance: 80 },
		{ name: 'MS-SQL', performance: 50 },
		{ name: 'SSIS', performance: 60 }
		
	];

	$scope.achievements = [
		{ paragraph: 'Co-ordinated an event “ALGO-WAR” in Ignitia 2018.' },
		{ paragraph: 'Represented PSIT FOOTBALL TEAM and branch team (CSE) in Zonal level tournament' },
		{ paragraph: 'Awarded a certificate for ‘Best Student’ in Sanskriti Gyan Pariksha in class 8th and 12th.' },
		{ paragraph: '96% in Physics and Chemistry and 98% in Mathematics in Intermediate.' },
		{ paragraph: 'Attained 1st place in Interhouse Debate Competition in 8th class.' },
		{ paragraph: '5 Star coder in Python Basics in HackerRank Platform. https://www.hackerrank.com/certificates/0b7b394a0822' },
		{ paragraph: '5 Star coder in Problem Solving using Python in HackerRank Platform. https://www.hackerrank.com/certificates/af45ab6bfa25' },
	];

	$scope.certifications = [
		{
			title: 'Internship Program',
			imageUrl_small: 'assets/certificates/small/Internship.jpg',
			imageUrl: 'assets/certificates/Internship.jpg',
		}
		//  {
		// 	title: 'Star Team Award (SuperOne)',
		// 	imageUrl_small: 'assets/certificates/small/w3villa_star_team.jpg',
		// 	imageUrl: 'assets/certificates/w3villa_star_team.jpg',
		// }, {
		// 	title: 'Advance Diploma In Computer Application',
		// 	imageUrl_small: 'assets/certificates/small/data_expert_computer_diploma.jpg',
		// 	imageUrl: 'assets/certificates/data_expert_computer_diploma.jpg',
		// }, {
		// 	title: 'Course On Computer Concepts',
		// 	imageUrl_small: 'assets/certificates/small/ccc.jpg',
		// 	imageUrl: 'assets/certificates/ccc.jpg',
		// }, {
		// 	title: 'B.tech Degree',
		// 	imageUrl_small: 'assets/certificates/small/btech-degree.jpg',
		// 	imageUrl: 'assets/certificates/btech-degree.jpg',
		// }, {
		// 	title: 'e.Soft Connect Certificate',
		// 	imageUrl_small: 'assets/certificates/small/e_soft_project.jpg',
		// 	imageUrl: 'assets/certificates/e_soft_project.jpg',
		// }, {
		// 	title: 'MyGov, Doordarshan Certificate',
		// 	imageUrl_small: 'assets/certificates/small/government_meri_ganga.jpg',
		// 	imageUrl: 'assets/certificates/government_meri_ganga.jpg',
		// }, {
		// 	title: 'Certificate Of Honor',
		// 	imageUrl_small: 'assets/certificates/small/hindustan_education_fare.jpg',
		// 	imageUrl: 'assets/certificates/hindustan_education_fare.jpg',
		// }, {
		// 	title: 'Cyber Security Awareness Program',
		// 	imageUrl_small: 'assets/certificates/small/innovation_indeas_infotech_cyber_security.jpg',
		// 	imageUrl: 'assets/certificates/innovation_indeas_infotech_cyber_security.jpg',
		// }, {
		// 	title: 'MPEC Dance Competition',
		// 	imageUrl_small: 'assets/certificates/small/mpec_dance_competition.jpg',
		// 	imageUrl: 'assets/certificates/mpec_dance_competition.jpg',
		// }, {
		// 	title: 'Diploma In Computer Hardware',
		// 	imageUrl_small: 'assets/certificates/small/omitech.jpg',
		// 	imageUrl: 'assets/certificates/omitech.jpg',
		// }, {
		// 	title: 'Android Application Training Certificate',
		// 	imageUrl_small: 'assets/certificates/small/shreyanshi_consultancy_android.jpg',
		// 	imageUrl: 'assets/certificates/shreyanshi_consultancy_android.jpg',
		// }, {
		// 	title: 'WorkShop On Python',
		// 	imageUrl_small: 'assets/certificates/small/softpro_india_python.jpg',
		// 	imageUrl: 'assets/certificates/softpro_india_python.jpg',
		// }, {
		// 	title: 'Gold Medal In Taekwondo State Level Competition',
		// 	imageUrl_small: 'assets/certificates/small/taekwondo.jpg',
		// 	imageUrl: 'assets/certificates/taekwondo.jpg',
		// }, {
		// 	title: 'HTML5 Workshop Certificate',
		// 	imageUrl_small: 'assets/certificates/small/talentedge_html5.jpg',
		// 	imageUrl: 'assets/certificates/talentedge_html5.jpg',
		// }, {
		// 	title: 'Certification Of Appreciation',
		// 	imageUrl_small: 'assets/certificates/small/w3villa_appreciation_april_june.jpg',
		// 	imageUrl: 'assets/certificates/w3villa_appreciation_april_june.jpg',
		// }, {
		// 	title: 'Certification Of Appreciation',
		// 	imageUrl_small: 'assets/certificates/small/w3villa_appreciation_january_march.jpg',
		// 	imageUrl: 'assets/certificates/w3villa_appreciation_january_march.jpg',
		// }
	];

	$scope.educations = [
		{
			name: 'Bachelor of Technology',
			duration: '2016-2020',
			college: 'Pranveer Singh Institute of Technology, Kanpur', 
			message: 'I completed my graduation from here. and scored first division with 75%. also got placement from here in Infosys Company.'
		}, {
			name: 'Intermediate',
			duration: '2015-2016',
			college: 'N.L.K.V.M. Inter College, Kanpur',
			message: 'I completed my Intermediate Education form here and scored first division with 92%.'
		}, {
			name: 'High School',
			duration: '2013-2014',
			college: 'N.L.K.V.M. Inter College, Kanpur',
			message: 'I completed my High School Education form here and scored first division with 85.5%.'
		},
	];

	$scope.experiences = [
		{
			company: 'Infosys Limited.',
			duration: 'Feb 2020 - present',
			destination: 'Senior System Engineer',
			message: 'I am working here as a System Engineer and working on mainly on ASP.NET.'
		}
	];

	$scope.recommendations = [
		{
			name: 'Pratibha Singh',
			message: 'Worked for a few months only, but came to know him personally and professionally in both ways. Professionally good team player, and help and respect everyone. Personally, Deepak is full of life & wants to achieve the good heights in his career. Honest and integrity work as synonym for him.'
		}, {
			name: 'Shreenath Chaurasia',
			message: 'Deepak is very dedicated and punctual. His contribution to his work is always remarkable. he is a stand-alone champion and while working with the team his performance got increased even more. His work quality will always makes him a key member of the team.'
		}, {
			name: 'Kalid Moin',
			message: 'Deepak is always looking to learn new Technologies, He is a Quick learner.'
		}, {
			name: 'Pallavi Gupta',
			message: "Deepak is an extremely hardworking, smart, competent, and diligent co-worker. He also has high levels of energy and productivity. He is a smart engineer who can come up to speed on new technologies quickly and start being effective from the get-go. It's a pleasure to work with him."
		}, {
			name: 'Adil Osama Rasheed',
			message: 'Deepak has been an exceptional developer. He holds strong command on cutting edge technologies. He is always keen to take challenges and love to work on new technologies. I wish him best of luck for all his future endeavours.'
		}, {
			name: 'Ankita Vaish',
			message: 'Deepak is a very focussed, calm, and committed team member who makes a great addition to any environment he works in. A confident and friendly member. He is an expert in his technical fields and delivers the work on time. Deepak is popular with his colleagues and clients alike and has a real passion and enthusiasm for the industry that shines through. I would highly recommend him.'
		},
	];

	$scope.links = [
		{
			name: 'twitter',
			class: 'bx bxl-twitter',
			href: 'https://twitter.com/DeepakjustD'
		}, {
			name: 'instagram',
			class: 'bx bxl-instagram',
			href: 'https://www.instagram.com/_.just_d._/'
		}, {
			name: 'linkedin',
			class: 'bx bxl-linkedin',
			href: 'https://www.linkedin.com/in/deepakkumar88/'
		}, {
			name: 'github',
			class: 'bx bxl-github',
			href: 'https://github.com/tech-deepak'
		}, {
			name: 'facebook',
			class: 'bx bxl-facebook',
			href: 'https://www.facebook.com/deepakjustd/'
		}, {
			name: 'youtube',
			class: 'bx bxl-youtube',
			href: 'https://www.youtube.com/channel/UCyVulQQhax-EqRyTrEwZuvQ'
		}, {
			name: 'google',
			class: 'bx bxl-google',
			href: 'mailto:amansaxena606@gmail.com.com'
		}, {
			name: 'whatsapp',
			class: 'bx bxl-whatsapp',
			href: 'https://wa.me/+918299115606'
		}, {
			name: 'dev-to',
			class: 'bx bxl-dev-to',
			href: 'https://dev.to/deepakjustd'
		}, {
			name: 'telegram',
			class: 'bx bxl-telegram',
			href: 'https://telegram.me/justdeepakkumar',
		}, {
			name: 'reddit',
			class: 'bx bxl-reddit',
			href: 'https://reddit.com/u/deepakjustd'
		}, {
			name: 'spotify',
			class: 'bx bxl-spotify',
			href: 'https://open.spotify.com/user/31bfhdwq52tvay7znulzhihwg3ae'
		}
	];

	$scope.projects = [
		{
			name: 'E-Library ',
			type: 'Web',
			discription: 'Online learning web-app for students in their studies',
			platForm: 'Servlet, JSP, Html, Oracle',
			rolePlayed: 'Front End Developer',
			filter: 'app'
			
		}, {
			name: 'Venue Automation',
			type: 'App',
			discription: 'Book a venue online using this application.',
			platForm: 'Servlet, JSP, Html, Oracle',
			rolePlayed: 'Back End Developer',
			filter: 'app'
		}, {
			name: 'Travel Buddy',
			type: 'Web',
			discription: 'help travellers to find all services in one Application.',
			platForm: '.Net, EF-Core, MsSql',
			rolePlayed: 'Scrum master',
			filter: 'web'
		}
	]

	function getAge(dateString) {
		var today = new Date();
		var birthDate = new Date(dateString);
		var age = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		return age;
	}

	function dateDiff(startingDate, endingDate) {
		var startDate = new Date(new Date(startingDate).toISOString().substr(0, 10));
		if (!endingDate) {
			endingDate = new Date().toISOString().substr(0, 10); // need date in YYYY-MM-DD format
		}
		var endDate = new Date(endingDate);
		if (startDate > endDate) {
			var swap = startDate;
			startDate = endDate;
			endDate = swap;
		}
		var startYear = startDate.getFullYear();
		var february = (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0 ? 29 : 28;
		var daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

		var yearDiff = endDate.getFullYear() - startYear;
		var monthDiff = endDate.getMonth() - startDate.getMonth();
		if (monthDiff < 0) {
			yearDiff--;
			monthDiff += 12;
		}
		var dayDiff = endDate.getDate() - startDate.getDate();
		if (dayDiff < 0) {
			if (monthDiff > 0) {
				monthDiff--;
			} else {
				yearDiff--;
				monthDiff = 11;
			}
			dayDiff += daysInMonth[startDate.getMonth()];
		}

		let newYear = '';
		if (yearDiff == 1) {
			newYear = yearDiff + ' Year ';
		} else if (yearDiff > 1) {
			newYear = yearDiff + ' Years ';
		}

		let month = '';
		if (monthDiff == 1) {
			month = monthDiff + ' Month'
		} else if (monthDiff > 1) {
			month = monthDiff + ' Months'
		}

		return newYear + '' + month;
	}
});