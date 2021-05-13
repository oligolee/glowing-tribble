import React from 'react';
import { Meta, Story } from '@storybook/react';
import { LookupField, LookupFieldProps, LookupProps } from '../src/index';
import { PartyLookupProps, PartyLookup } from '../src/lookups/party-lookup'


const meta: Meta = {
  title: 'Lookup Field Stories',
  component: LookupField,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<LookupFieldProps> = args => <LookupField {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing


export const PartyLookupStory = Template.bind({});

const partyMasterProps = { title: 'Search Parties' } as PartyLookupProps
const lookupProps = { lookupDialogOpen: false, lookupComponentProps: partyMasterProps } as LookupProps<PartyLookupProps>
const storyArgs = {
  label: 'Party',
  value: 'Mahindra & Mahindra', lookupComponent: PartyLookup, lookupProps
} as LookupFieldProps

PartyLookupStory.args = storyArgs;

