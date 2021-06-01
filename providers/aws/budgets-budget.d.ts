import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BudgetsBudgetConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#account_id BudgetsBudget#account_id}.
     */
    readonly accountId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#budget_type BudgetsBudget#budget_type}.
     */
    readonly budgetType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#cost_filters BudgetsBudget#cost_filters}.
     */
    readonly costFilters?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#limit_amount BudgetsBudget#limit_amount}.
     */
    readonly limitAmount: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#limit_unit BudgetsBudget#limit_unit}.
     */
    readonly limitUnit: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#name BudgetsBudget#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#name_prefix BudgetsBudget#name_prefix}.
     */
    readonly namePrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#time_period_end BudgetsBudget#time_period_end}.
     */
    readonly timePeriodEnd?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#time_period_start BudgetsBudget#time_period_start}.
     */
    readonly timePeriodStart: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#time_unit BudgetsBudget#time_unit}.
     */
    readonly timeUnit: string;
    /**
     * cost_types block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#cost_types BudgetsBudget#cost_types}
     */
    readonly costTypes?: BudgetsBudgetCostTypes[];
    /**
     * notification block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#notification BudgetsBudget#notification}
     */
    readonly notification?: BudgetsBudgetNotification[];
}
export interface BudgetsBudgetCostTypes {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#include_credit BudgetsBudget#include_credit}.
     */
    readonly includeCredit?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#include_discount BudgetsBudget#include_discount}.
     */
    readonly includeDiscount?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#include_other_subscription BudgetsBudget#include_other_subscription}.
     */
    readonly includeOtherSubscription?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#include_recurring BudgetsBudget#include_recurring}.
     */
    readonly includeRecurring?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#include_refund BudgetsBudget#include_refund}.
     */
    readonly includeRefund?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#include_subscription BudgetsBudget#include_subscription}.
     */
    readonly includeSubscription?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#include_support BudgetsBudget#include_support}.
     */
    readonly includeSupport?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#include_tax BudgetsBudget#include_tax}.
     */
    readonly includeTax?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#include_upfront BudgetsBudget#include_upfront}.
     */
    readonly includeUpfront?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#use_amortized BudgetsBudget#use_amortized}.
     */
    readonly useAmortized?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#use_blended BudgetsBudget#use_blended}.
     */
    readonly useBlended?: boolean;
}
export interface BudgetsBudgetNotification {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#comparison_operator BudgetsBudget#comparison_operator}.
     */
    readonly comparisonOperator: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#notification_type BudgetsBudget#notification_type}.
     */
    readonly notificationType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#subscriber_email_addresses BudgetsBudget#subscriber_email_addresses}.
     */
    readonly subscriberEmailAddresses?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#subscriber_sns_topic_arns BudgetsBudget#subscriber_sns_topic_arns}.
     */
    readonly subscriberSnsTopicArns?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#threshold BudgetsBudget#threshold}.
     */
    readonly threshold: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#threshold_type BudgetsBudget#threshold_type}.
     */
    readonly thresholdType: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html aws_budgets_budget}.
 */
export declare class BudgetsBudget extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html aws_budgets_budget} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: BudgetsBudgetConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string | undefined;
    get arn(): string;
    private _budgetType;
    get budgetType(): string;
    set budgetType(value: string);
    get budgetTypeInput(): string;
    private _costFilters?;
    get costFilters(): {
        [key: string]: string;
    };
    set costFilters(value: {
        [key: string]: string;
    });
    resetCostFilters(): void;
    get costFiltersInput(): {
        [key: string]: string;
    } | undefined;
    get id(): string;
    private _limitAmount;
    get limitAmount(): string;
    set limitAmount(value: string);
    get limitAmountInput(): string;
    private _limitUnit;
    get limitUnit(): string;
    set limitUnit(value: string);
    get limitUnitInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
    private _timePeriodEnd?;
    get timePeriodEnd(): string;
    set timePeriodEnd(value: string);
    resetTimePeriodEnd(): void;
    get timePeriodEndInput(): string | undefined;
    private _timePeriodStart;
    get timePeriodStart(): string;
    set timePeriodStart(value: string);
    get timePeriodStartInput(): string;
    private _timeUnit;
    get timeUnit(): string;
    set timeUnit(value: string);
    get timeUnitInput(): string;
    private _costTypes?;
    get costTypes(): BudgetsBudgetCostTypes[];
    set costTypes(value: BudgetsBudgetCostTypes[]);
    resetCostTypes(): void;
    get costTypesInput(): BudgetsBudgetCostTypes[] | undefined;
    private _notification?;
    get notification(): BudgetsBudgetNotification[];
    set notification(value: BudgetsBudgetNotification[]);
    resetNotification(): void;
    get notificationInput(): BudgetsBudgetNotification[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
