import { ProfileContent, useProfileQuery } from '@entities/user'
import { Layout } from '@widgets/Layout'
import { Counters } from '@widgets/profile'

export const Profile = () => {
	const { data } = useProfileQuery()

	return (
		<>
			<Layout
				heading={data?.name}
				bgImage="/images/profile-bg.jpg"
			>
				<Counters />
			</Layout>

			<ProfileContent />
		</>
	)
}
