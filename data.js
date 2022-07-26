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
	$scope.email = 'amansaxena106@gmail.com';
	$scope.summary = 'ASP.NET Developer || C# and PYTHON Developer || CORE JAVA, SSMS, EF-CORE, SSIS';

	$scope.skills = [
		{ name: 'C#', performance: 90 },
		{ name: 'Python', performance: 90 },
		{ name: 'Core Java', performance: 90 },
		{ name: 'ASP.NET Core', performance: 80 },
		{ name: 'EF-Core', performance: 80 },
		{ name: 'SSMS', performance: 90 },
		{ name: 'MS-SQL', performance: 90 },
		{ name: 'SSIS', performance: 70 },
		{ name: 'CSS', performance: 70 },
		{ name: 'HTML', performance: 70 },
	];

	$scope.achievements = [
		{ paragraph: 'Top performer in infosys Internship.' },
		{ paragraph: 'I have trained in Java technology with A grade(Outstanding Performer) along with Live Project.' },
		{ paragraph: '5 Star coder in Python Basics in HackerRank Platform. https://www.hackerrank.com/certificates/0b7b394a0822' },
		{ paragraph: '5 Star coder in Problem Solving using Python in HackerRank Platform. https://www.hackerrank.com/certificates/af45ab6bfa25' },
		{ paragraph: 'Co-ordinated an event “ALGO-WAR” in Ignitia 2018.' },
		{ paragraph: 'Represented PSIT FOOTBALL TEAM and branch team (CSE) in Zonal level tournament' },
		{ paragraph: 'Awarded a certificate for ‘Best Student’ in Sanskriti Gyan Pariksha in class 8th and 12th.' },
		{ paragraph: '96% in Physics and Chemistry and 98% in Mathematics in Intermediate.' },
		{ paragraph: 'Attained 1st place in Interhouse Debate Competition in 8th class.' }
	];

	$scope.certifications = [
		{
			title: 'Internship Program',
			imageUrl_small: 'assets/certificates/small/Internship.jpg',
			imageUrl: 'assets/certificates/Internship.jpg',
		}, {
			title: 'Certificate of participation',
			imageUrl_small: 'assets/certificates/small/IMG-20220726-WA0012.jpg',
			imageUrl: 'assets/certificates/IMG-20220726-WA0012.jpg',
		}, {
			title: 'Certificate of JSP and Servlet',
			imageUrl_small: 'assets/certificates/small/IMG-20220726-WA0013.jpg',
			imageUrl: 'assets/certificates/IMG-20220726-WA0013.jpg',
		}, {
			title: 'Hackerank Certificate on Python Basic',
			imageUrl_small: 'assets/certificates/small/Screenshot 2022-07-26 163944.png',
			imageUrl: 'assets/certificates/Screenshot 2022-07-26 163944.png',
		}, {
			title: 'Hackerank Certificate on Problem Solving',
			imageUrl_small: 'assets/certificates/small/Screenshot 2022-07-26 164300.png',
			imageUrl: 'assets/certificates/Screenshot 2022-07-26 164300.png',
		}, {
			title: 'High School Marksheet',
			imageUrl_small: 'assets/certificates/small/IMG-20220726-WA0009.jpg',
			imageUrl: 'assets/certificates/IMG-20220726-WA0009.jpg',
		}, {
			title: 'Intermediate Marksheet',
			imageUrl_small: 'assets/certificates/small/IMG-20220726-WA0010.jpg',
			imageUrl: 'assets/certificates/IMG-20220726-WA0010.jpg',
		}, {
			title: 'B.Tech Degree',
			imageUrl_small: 'assets/certificates/small/IMG-20220726-WA0014.jpg',
			imageUrl: 'assets/certificates/IMG-20220726-WA0014.jpg',
		}
		
	];

	$scope.educations = [
		{
			name: 'Bachelor of Technology',
			duration: '2016-2020',
			college: 'Pranveer Singh Institute of Technology, Kanpur', 
			message: 'I have completed my graduation from here. and scored first division with 79.5%. also got placement from here in Infosys Company.'
		}, {
			name: 'Intermediate',
			duration: '2015-2016',
			college: 'N.L.K.V.M. Inter College, Kanpur',
			message: 'I have completed my Intermediate Education form here and scored first division with 92%.'
		}, {
			name: 'High School',
			duration: '2013-2014',
			college: 'N.L.K.V.M. Inter College, Kanpur',
			message: 'I have completed my High School Education form here and scored first division with 85.5%.'
		},
	];

	$scope.experiences = [
		{
			company: 'Infosys Limited.',
			duration: 'Feb 2020 - present',
			destination: 'Senior System Engineer',
			message: 'I am working here as a Senior System Engineer and working on ASP.NET.'
		}
	];


	$scope.links = [
		{
			name: 'twitter',
			class: 'bx bxl-twitter',
			href: 'https://twitter.com/'
		}, {
			name: 'instagram',
			class: 'bx bxl-instagram',
			href: 'https://www.instagram.com/'
		}, {
			name: 'linkedin',
			class: 'bx bxl-linkedin',
			href: 'https://www.linkedin.com/in/aman-saxena-82a18a191'
		}, {
			name: 'github',
			class: 'bx bxl-github',
			href: 'https://github.com/aman-saxena'
		}, {
			name: 'facebook',
			class: 'bx bxl-facebook',
			href: 'https://www.facebook.com/profile.php?id=100007731043032'
		}, {
			name: 'google',
			class: 'bx bxl-google',
			href: 'mailto:amansaxena106@gmail.com'
		}, {
			name: 'whatsapp',
			class: 'bx bxl-whatsapp',
			href: 'https://wa.me/+918299115606'
		}, {
			name: 'telegram',
			class: 'bx bxl-telegram',
			href: 'https://telegram.me/Amansaxena106',
		}
	];

	$scope.projects = [
		{
			name: 'E-Library ',
			type: 'Web',
			discription: 'Online learning web-app for students in their studies',
			platForm: 'Servlet, JSP, Html, Oracle',
			rolePlayed: 'Front End Developer',
			filter: 'web'
			
		}, {
			name: 'Venue Automation',
			type: 'App',
			discription: 'Book a venue online using this application.',
			platForm: 'Servlet, JSP, Html, Oracle',
			rolePlayed: 'Back End Developer',
			filter: 'web'
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