import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	article, aside, audio, command, datagrid, details, dialog, embed, 
	figcaption, figure, footer, header, hgroup, menu, nav, section, summary,
	video, wbr {
		display: block;
	}

	bdi, figcaption, keygen, mark, meter, progress, rp, rt, ruby, time {
		display: inline;
	}

	/* Deprecated tags */
	acronym, applet, big, center, dir, font, frame, frameset, noframes, s,
	strike, tt, u, xmp {
		display: none;
	}

	/* Reset styles for all structural tags */
	a, abbr, area, article, aside, audio, b, bdo, blockquote, body, button, 
	canvas, caption, cite, code, col, colgroup, command, datalist, dd, del, 
	details, dialog, dfn, div, dl, dt, em, embed, fieldset, figure, form,
	h1, h2, h3, h4, h5, h6, head, header, hgroup, hr, html, i, iframe, img, 
	input, ins, keygen, kbd, label, legend, li, map, mark, menu, meter, nav,
	noscript, object, ol, optgroup, option, output, p, param, pre, progress,
	q, rp, rt, ruby, samp, section, select, small, span, strong, sub, sup, 
	table, tbody, td, textarea, tfoot, th, thead, time, tr, ul, var, video {
		background: transparent;
		border: 0;
		font-size: 100%;
		font: inherit;
		margin: 0;
		outline: none;
		padding: 0;
		text-align: left;
		text-decoration: none;
		vertical-align: baseline;
		z-index: 1;
	}

	body {
		font-family: 'Poppins', sans-serif;
		line-height: 1;
	}

	ol, ul {
		list-style: none;
	}

	blockquote, q {
		quotes: none;

	}

	blockquote:before, blockquote:after, q:before, q:after {
		content: '';
		content: none;
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	:root {
        --gray-extra-dark: #111;
        --gray-dark: #16161a;
		--gray: #1b1b20;
        --gray-light: #94a1b2;
        --white: #fffffe;
        --green: #2cb67d;
        --green-dark: #289869;
        --black: #010101;
		--green-gradient: linear-gradient(227.91deg, #0b5a39 0%, #14e18c 100%) 1;
    }

    * {
        box-sizing: border-box;
    }

    html { 
        @media (max-width: 1080px){
            font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    body {
        background: var(--gray-extra-dark);
        -webkit-font-smoothing: antialiased;
        scroll-snap-type: y mandatory;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    body::-webkit-scrollbar {
        width: 0.75rem;
    }

    body::-webkit-scrollbar-track {
        background: #111;
    }

    body::-webkit-scrollbar-thumb {
        background-color: #444;
    }
`;
