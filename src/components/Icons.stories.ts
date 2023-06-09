import type { Meta, StoryObj } from '@storybook/vue3';
import { defaultIcons } from './Icons';
import Icon from './Icon.vue';

const meta = {
  title: 'Icons',
  component: Icon,
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => ({
    components: { Icon },
    setup() {
      return { args };
    },
    template: '<Icon v-bind="args" />',
  }),
  args: {
    name: 'person',
  },
};

export const Missing: Story = {
  render: (args) => ({
    components: { Icon },
    setup() {
      return { args };
    },
    template: '<Icon v-bind="args" />',
  }),
  args: {
    name: 'missing______',
  },
};

export const AllIcons: Story = {
  render: (args) => ({
    components: { Icon },
    setup() {
      return { ...args };
    },
    template: `
      <div v-for="(_, key) in defaultIcons" :key="key" v-bind:style = "{ display: 'flex', alignItems: 'center', gap: '10px' }">
        <Icon :name="key" />
        <p>{{key}}</p>
      </div>
    `,
  }),
  args: {
    defaultIcons,
  },
};
