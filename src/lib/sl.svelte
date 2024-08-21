<script>
	import { onMount } from 'svelte';

	const D51PATTERNS = 6;

	const D51STR1 = '      ====        ________                _______ ';
	const D51STR2 = '  _D _|  |_______/        \\__I_I_____===__|_________| ';
	const D51STR3 = '   |(_)---  |   H\\________/ |   |        =|___ ___|   ';
	const D51STR4 = '   /     |  |   H  |  |     |   |         ||_| |_||   ';
	const D51STR5 = '  |      |  |   H  |__--------------------| [___] |   ';
	const D51STR6 = '  | ________|___H__/__|_____/[][]~\\_______|       |   ';
	const D51STR7 = '  |/ |   |-----------I_____I [][] []  D   |=======|_______';

	const WHEELS = [
		{
			WHL1: '__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|______ ',
			WHL2: ' |/-=|___|=    ||    ||    ||    |_____/~\\___/        ',
			WHL3: '  \\_/      \\O=====O=====O=====O_/      \\_/            '
		},
		{
			WHL1: '__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|______ ',
			WHL2: ' |/-=|___|=O=====O=====O=====O   |_____/~\\___/        ',
			WHL3: '  \\_/      \\__/  \\__/  \\__/  \\__/      \\_/            '
		},
		{
			WHL1: '__/ =| o |=-O=====O=====O=====O \\ ____Y___________|______ ',
			WHL2: ' |/-=|___|=    ||    ||    ||    |_____/~\\___/        ',
			WHL3: '  \\_/      \\__/  \\__/  \\__/  \\__/      \\_/            '
		},
		{
			WHL1: '__/ =| o |=-~O=====O=====O=====O\\ ____Y___________|______ ',
			WHL2: ' |/-=|___|=    ||    ||    ||    |_____/~\\___/        ',
			WHL3: '  \\_/      \\__/  \\__/  \\__/  \\__/      \\_/            '
		},
		{
			WHL1: '__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|______ ',
			WHL2: ' |/-=|___|=   O=====O=====O=====O|_____/~\\___/        ',
			WHL3: '  \\_/      \\__/  \\__/  \\__/  \\__/      \\_/            '
		},
		{
			WHL1: '__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|______ ',
			WHL2: ' |/-=|___|=    ||    ||    ||    |_____/~\\___/        ',
			WHL3: '  \\_/      \\_O=====O=====O=====O/      \\_/            '
		}
	];

	const COAL = `
                             
    _________________         
   _|                \\_____A  
 =|                        |  
 -|                        |  
__|________________________|_ 
|__________________________|_ 
   |_D__D__D_|  |_D__D__D_|   
    \\_/   \\_/    \\_/   \\_/    
`;

	/**@type {string[]}*/
	let animatedD51 = [];
	for (let i = 0; i < D51PATTERNS; i++) {
		animatedD51.push(
			D51STR1 +
				'\n' +
				D51STR2 +
				'\n' +
				D51STR3 +
				'\n' +
				D51STR4 +
				'\n' +
				D51STR5 +
				'\n' +
				D51STR6 +
				'\n' +
				D51STR7 +
				'\n' +
				WHEELS[i].WHL1 +
				'\n' +
				WHEELS[i].WHL2 +
				'\n' +
				WHEELS[i].WHL3
		);
	}

	let currentD51 = 0;
	$: d51 = animatedD51[currentD51];
	$: currentD51 = currentD51 >= animatedD51.length - 1 ? 0 : currentD51 + 1;
	onMount(() => {
		const interval = setInterval(() => {
			currentD51 = currentD51 >= animatedD51.length - 1 ? 0 : currentD51 + 1;
		}, 100); // Change 2000 to the number of milliseconds you want between updates

		return () => clearInterval(interval);
	});
</script>

<div class="sl flex text-text">
	<pre class="text-xs">
		{d51}
	</pre>
	<pre class="text-xs">
		{COAL}
	</pre>
</div>

<style>
	@keyframes moveRight {
		from {
			transform: translateX(500px);
		}
		to {
			transform: translateX(-700px);
		}
	}

	.sl {
		animation: moveRight 10s linear infinite;
	}
</style>
