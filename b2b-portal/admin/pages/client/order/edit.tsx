import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { OrderForm } from '../../../components/forms/OrderForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Edit order
			</Title>
			<EditScope entity="Order(id=$id)" redirectOnSuccess="client/order/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton to="client/order/detail(id: $entity.id)" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<OrderForm />
			</EditScope>
		</>
	)
}
