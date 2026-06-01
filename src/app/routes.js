import BasicExample from '../examples/basic/basic.component.vue';
import KeyboardContractExample from '../examples/keyboard-contract/keyboard-contract.component.vue';
import AriaStateExample from '../examples/aria-state/aria-state.component.vue';
import HeadlessAriaExample from '../examples/headless-aria/headless-aria.component.vue';
import StateHookExample from '../examples/state-hook/state-hook.component.vue';
import SlotsApiExample from '../examples/slots-api/slots-api.component.vue';
import TypeSafeFactoryExample from '../examples/type-safe-factory/type-safe-factory.component.vue';
import AsyncObjectPreservationExample from '../examples/async-object-preservation/async-object-preservation.component.vue';
import SingleSelectionExample from '../examples/single-selection/single-selection.component.vue';
import SearchFilterExample from '../examples/search-filter/search-filter.component.vue';
import CustomSearchApiExample from '../examples/custom-search-api/custom-search-api.component.vue';
import SearchFilterByPropertyExample from '../examples/search-filter-by-property/search-filter-by-property.component.vue';
import SearchAddNewItemExample from '../examples/search-add-new-item/search-add-new-item.component.vue';
import GroupByExample from '../examples/group-by/group-by.component.vue';
import TemplatingExample from '../examples/templating/templating.component.vue';
import TemplateDrivenFormsExample from '../examples/template-driven-forms/template-driven-forms.component.vue';
import ReactiveFormsExample from '../examples/reactive-forms/reactive-forms.component.vue';
import VirtualScrollingExample from '../examples/virtual-scrolling/virtual-scrolling.component.vue';
import LazyLoadingApiExample from '../examples/lazy-loading-api/lazy-loading-api.component.vue';
import RemoteDataExample from '../examples/remote-data/remote-data.component.vue';
import ListLoopExample from '../examples/list-loop/list-loop.component.vue';
import DialogExample from '../examples/dialog/dialog.component.vue';
import MultipleDropdownsExample from '../examples/multiple-dropdowns/multiple-dropdowns.component.vue';
import DynamicDataExample from '../examples/dynamic-data/dynamic-data.component.vue';
import MethodsExample from '../examples/methods/methods.component.vue';
import EventsExample from '../examples/events/events.component.vue';
import DisabledExample from '../examples/disabled/disabled.component.vue';
import LimitSelectionExample from '../examples/limit-selection/limit-selection.component.vue';
import LimitBadgesExample from '../examples/limit-badges/limit-badges.component.vue';
import CustomPlaceholderExample from '../examples/custom-placeholder/custom-placeholder.component.vue';
import StylingExample from '../examples/styling/styling.component.vue';
import BodyOverlayAutoExample from '../examples/body-overlay-auto/body-overlay-auto.component.vue';
import AllVisibleCounterExample from '../examples/all-visible-counter/all-visible-counter.component.vue';

export const routes = [
  { slug: 'basic', title: "Basic usage", description: "Essential setup with a controlled v-model value.", component: BasicExample },
  { slug: 'keyboard-contract', title: "Keyboard contract", description: "Space, Tab, arrows, Escape, Backspace, and focused badge removal.", component: KeyboardContractExample },
  { slug: 'aria-state', title: "ARIA state audit", description: "Inspect aria-selected and aria-checked in a real option list.", component: AriaStateExample },
  { slug: 'headless-aria', title: "Headless + ARIA", description: "Own 100% of the HTML while Stackline supplies state and ARIA prop getters.", component: HeadlessAriaExample },
  { slug: 'state-hook', title: "State hook", description: "Use the low-level state composable without the styled DOM.", component: StateHookExample },
  { slug: 'slots-api', title: "Slots API", description: "Customize option rows, badges, and group headers with scoped slots.", component: SlotsApiExample },
  { slug: 'type-safe-factory', title: "Typed helper API", description: "Use helper APIs to keep settings and composables consistent.", component: TypeSafeFactoryExample },
  { slug: 'async-object-preservation', title: "Async object preservation", description: "Selected object values remain stable when option data refreshes late.", component: AsyncObjectPreservationExample },
  { slug: 'single-selection', title: "Single selection", description: "Single-value behavior without checkboxes.", component: SingleSelectionExample },
  { slug: 'search-filter', title: "Search filter", description: "Searchable list with select-all support.", component: SearchFilterExample },
  { slug: 'custom-search-api', title: "Custom search from API", description: "Search against a locally simulated API response.", component: CustomSearchApiExample },
  { slug: 'search-filter-by-property', title: "Search filter by property", description: "Search itemName, region, and capital.", component: SearchFilterByPropertyExample },
  { slug: 'search-add-new-item', title: "Search and add new item", description: "Create a new option from the current filter text.", component: SearchAddNewItemExample },
  { slug: 'group-by', title: "Group By", description: "Group options by region and toggle entire groups.", component: GroupByExample },
  { slug: 'templating', title: "Templating", description: "Use render functions for option and badge content.", component: TemplatingExample },
  { slug: 'template-driven-forms', title: "Template-style forms", description: "Keep form state in refs and derive validation.", component: TemplateDrivenFormsExample },
  { slug: 'reactive-forms', title: "Reactive forms", description: "Use computed validation with controlled selected arrays.", component: ReactiveFormsExample },
  { slug: 'virtual-scrolling', title: "Virtual Scrolling", description: "Large data set with a constrained accessible list.", component: VirtualScrollingExample },
  { slug: 'lazy-loading-api', title: "Lazy Loading from API", description: "Append rows when the list reaches the bottom.", component: LazyLoadingApiExample },
  { slug: 'remote-data', title: "Data from remote API", description: "Replace the data array after a simulated request.", component: RemoteDataExample },
  { slug: 'list-loop', title: "Using in list for loop", description: "Render several dropdowns from one configuration list.", component: ListLoopExample },
  { slug: 'dialog', title: "Using inside dialog", description: "appendToBody avoids clipping inside overflow containers.", component: DialogExample },
  { slug: 'multiple-dropdowns', title: "Multiple dropdowns", description: "Independent values and settings on one page.", component: MultipleDropdownsExample },
  { slug: 'dynamic-data', title: "Load dynamic data", description: "Swap the available objects while preserving selected values.", component: DynamicDataExample },
  { slug: 'methods', title: "Methods", description: "Open, close, focus search, select all, and clear through refs.", component: MethodsExample },
  { slug: 'events', title: "Events", description: "Observe select, de-select, select-all, de-select-all, and change events.", component: EventsExample },
  { slug: 'disabled', title: "Disabled state", description: "Toggle disabled state without changing data.", component: DisabledExample },
  { slug: 'limit-selection', title: "Limit selection", description: "Prevent selecting more than the configured limit.", component: LimitSelectionExample },
  { slug: 'limit-badges', title: "Limit badges", description: "Show a stable +N counter only for hidden selected badges.", component: LimitBadgesExample },
  { slug: 'custom-placeholder', title: "Custom placeholder", description: "Customize the placeholder while keeping vertical centering.", component: CustomPlaceholderExample },
  { slug: 'styling', title: "Styling", description: "Switch skins and use CSS variables for a custom brand surface.", component: StylingExample },
  { slug: 'body-overlay-auto', title: "Body Overlay Auto", description: "Body overlay positioning for clipped surfaces.", component: BodyOverlayAutoExample },
  { slug: 'all-visible-counter', title: "All visible counter", description: "Prove the +N badge disappears when all badges are visible.", component: AllVisibleCounterExample }
];
