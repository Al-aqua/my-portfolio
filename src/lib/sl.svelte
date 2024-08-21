<script>
	import { onMount } from 'svelte';

	// const D51HEIGHT = 10;
	// const D51FUNNEL = 7;
	// const D51LENGTH = 83;
	const D51PATTERNS = 6;

	const D51STR1 = '      ====        ________                _______ ';
	const D51STR2 = '  _D _|  |_______/        \\__I_I_____===__|_________| ';
	const D51STR3 = '   |(_)---  |   H\\________/ |   |        =|___ ___|   ';
	const D51STR4 = '   /     |  |   H  |  |     |   |         ||_| |_||   ';
	const D51STR5 = '  |      |  |   H  |__--------------------| [___] |   ';
	const D51STR6 = '  | ________|___H__/__|_____/[][]~\\_______|       |   ';
	const D51STR7 = '  |/ |   |-----------I_____I [][] []  D   |=======|_______';

	const D51WHL11 = '__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|______ ';
	const D51WHL12 = ' |/-=|___|=    ||    ||    ||    |_____/~\\___/        ';
	const D51WHL13 = '  \\_/      \\O=====O=====O=====O_/      \\_/            ';

	const D51WHL21 = '__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|______ ';
	const D51WHL22 = ' |/-=|___|=O=====O=====O=====O   |_____/~\\___/        ';
	const D51WHL23 = '  \\_/      \\__/  \\__/  \\__/  \\__/      \\_/            ';

	const D51WHL31 = '__/ =| o |=-O=====O=====O=====O \\ ____Y___________|______ ';
	const D51WHL32 = ' |/-=|___|=    ||    ||    ||    |_____/~\\___/        ';
	const D51WHL33 = '  \\_/      \\__/  \\__/  \\__/  \\__/      \\_/            ';

	const D51WHL41 = '__/ =| o |=-~O=====O=====O=====O\\ ____Y___________|______ ';
	const D51WHL42 = ' |/-=|___|=    ||    ||    ||    |_____/~\\___/        ';
	const D51WHL43 = '  \\_/      \\__/  \\__/  \\__/  \\__/      \\_/            ';

	const D51WHL51 = '__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|______ ';
	const D51WHL52 = ' |/-=|___|=   O=====O=====O=====O|_____/~\\___/        ';
	const D51WHL53 = '  \\_/      \\__/  \\__/  \\__/  \\__/      \\_/            ';

	const D51WHL61 = '__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|______ ';
	const D51WHL62 = ' |/-=|___|=    ||    ||    ||    |_____/~\\___/        ';
	const D51WHL63 = '  \\_/      \\_O=====O=====O=====O/      \\_/            ';

	//
	// const COAL01 = '                              ';
	// const COAL02 = '                              ';
	// const COAL03 = '    _________________         ';
	// const COAL04 = '   _|                \\_____A  ';
	// const COAL05 = ' =|                        |  ';
	// const COAL06 = ' -|                        |  ';
	// const COAL07 = '__|________________________|_ ';
	// const COAL08 = '|__________________________|_ ';
	// const COAL09 = '   |_D__D__D_|  |_D__D__D_|   ';
	// const COAL10 = '    \\_/   \\_/    \\_/   \\_/    ';
	//
	// const COALDEL = '                              ';

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
	for (let i = 1; i <= D51PATTERNS; i++) {
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
				eval(`D51WHL${i}1`) +
				'\n' +
				eval(`D51WHL${i}2`) +
				'\n' +
				eval(`D51WHL${i}3`)
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
