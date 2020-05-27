import App from './App.svelte';

const applications =
[
	{
		type: "PhoneInterviewComplete",
		company: "Foobar Inc.",
		position: "Star Blazing Software Developer",
		notes: "This is a really cool job. The interviewer seemed like a really chill person. I know they will get back to me!",
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		type: "Applied",
		company: "Some Other Cool Company Inc.",
		position: "Front End Engineer",
		notes: "Sent the resume on May 1st, waiting to hear back from them.",
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		type: "PhoneInterviewScheduled",
		company: "Element AI",
		position: "Unicorn Developer",
		notes: "Phone interview scheduled for May 11th. Need to brush up on Vue JS and MVVM basics.",
		createdAt: new Date(),
		updatedAt: new Date()
	}
];

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		applications
	}
});

export default app;