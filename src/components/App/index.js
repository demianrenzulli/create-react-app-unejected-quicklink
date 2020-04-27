/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

import Footer from '@components/Footer';
import Hero from '@components/Hero';
import style from './index.module.css';
import { withQuicklink } from 'quicklink/dist/react/hoc.js';

const Home = lazy(() => import(/* webpackChunkName: "home" */ '@pages/Home'));
const About = lazy(() => import(/* webpackChunkName: "about" */ '@pages/About'));
const Article = lazy(() => import(/* webpackChunkName: "article" */ '@pages/Article'));
const Blog = lazy(() => import(/* webpackChunkName: "blog" */ '@pages/Blog'));

const options = {
	origins: []
};

const App = () => (
	<div className={style.app}>
		<Hero />
		<main className={style.wrapper}>
			<Suspense fallback={<div>Loading...</div>}>
				<Route path="/" exact component={withQuicklink(Home, options)} />
				<Route path="/blog" exact component={withQuicklink(Blog, options)} />
				<Route path="/blog/:title" component={withQuicklink(Article, options)} />
				<Route path="/about" exact component={withQuicklink(About, options)} />
			</Suspense>
		</main>
		<Footer />
	</div>
);

export default App;
