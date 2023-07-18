import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { MilestoneForm } from '../../../components/forms/MilestoneForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Edit milestone
			</Title>
			<EditScope entity="Milestone(id=$id)" redirectOnSuccess="admin/milestone/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton to="admin/milestone/detail(id: $entity.id)" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<MilestoneForm />
			</EditScope>
		</>
	)
}
