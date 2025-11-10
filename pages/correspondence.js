import AppContent from '../components/stateful/AppContent';
import AppHeader from '../components/stateful/AppHeader';
import Layout from '../components/stateful/Layout';

const App = () => (
	<Layout>
		<AppHeader />
		<AppContent />
	</Layout>
);

// Force server-side rendering instead of static generation
// This prevents build errors when data isn't available at build time
export async function getServerSideProps() {
	return {
		props: {},
	};
}

export default App;
