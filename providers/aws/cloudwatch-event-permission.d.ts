import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudwatchEventPermissionConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#action CloudwatchEventPermission#action}.
     */
    readonly action?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#event_bus_name CloudwatchEventPermission#event_bus_name}.
     */
    readonly eventBusName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#principal CloudwatchEventPermission#principal}.
     */
    readonly principal: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#statement_id CloudwatchEventPermission#statement_id}.
     */
    readonly statementId: string;
    /**
     * condition block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#condition CloudwatchEventPermission#condition}
     */
    readonly condition?: CloudwatchEventPermissionCondition[];
}
export interface CloudwatchEventPermissionCondition {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#key CloudwatchEventPermission#key}.
     */
    readonly key: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#type CloudwatchEventPermission#type}.
     */
    readonly type: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#value CloudwatchEventPermission#value}.
     */
    readonly value: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html aws_cloudwatch_event_permission}.
 */
export declare class CloudwatchEventPermission extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html aws_cloudwatch_event_permission} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CloudwatchEventPermissionConfig);
    private _action?;
    get action(): string;
    set action(value: string);
    resetAction(): void;
    get actionInput(): string | undefined;
    private _eventBusName?;
    get eventBusName(): string;
    set eventBusName(value: string);
    resetEventBusName(): void;
    get eventBusNameInput(): string | undefined;
    get id(): string;
    private _principal;
    get principal(): string;
    set principal(value: string);
    get principalInput(): string;
    private _statementId;
    get statementId(): string;
    set statementId(value: string);
    get statementIdInput(): string;
    private _condition?;
    get condition(): CloudwatchEventPermissionCondition[];
    set condition(value: CloudwatchEventPermissionCondition[]);
    resetCondition(): void;
    get conditionInput(): CloudwatchEventPermissionCondition[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
