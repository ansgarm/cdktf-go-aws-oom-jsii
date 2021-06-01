import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LambdaPermissionConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission.html#action LambdaPermission#action}.
     */
    readonly action: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission.html#event_source_token LambdaPermission#event_source_token}.
     */
    readonly eventSourceToken?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission.html#function_name LambdaPermission#function_name}.
     */
    readonly functionName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission.html#principal LambdaPermission#principal}.
     */
    readonly principal: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission.html#qualifier LambdaPermission#qualifier}.
     */
    readonly qualifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission.html#source_account LambdaPermission#source_account}.
     */
    readonly sourceAccount?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission.html#source_arn LambdaPermission#source_arn}.
     */
    readonly sourceArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission.html#statement_id LambdaPermission#statement_id}.
     */
    readonly statementId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission.html#statement_id_prefix LambdaPermission#statement_id_prefix}.
     */
    readonly statementIdPrefix?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission.html aws_lambda_permission}.
 */
export declare class LambdaPermission extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission.html aws_lambda_permission} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: LambdaPermissionConfig);
    private _action;
    get action(): string;
    set action(value: string);
    get actionInput(): string;
    private _eventSourceToken?;
    get eventSourceToken(): string;
    set eventSourceToken(value: string);
    resetEventSourceToken(): void;
    get eventSourceTokenInput(): string | undefined;
    private _functionName;
    get functionName(): string;
    set functionName(value: string);
    get functionNameInput(): string;
    get id(): string;
    private _principal;
    get principal(): string;
    set principal(value: string);
    get principalInput(): string;
    private _qualifier?;
    get qualifier(): string;
    set qualifier(value: string);
    resetQualifier(): void;
    get qualifierInput(): string | undefined;
    private _sourceAccount?;
    get sourceAccount(): string;
    set sourceAccount(value: string);
    resetSourceAccount(): void;
    get sourceAccountInput(): string | undefined;
    private _sourceArn?;
    get sourceArn(): string;
    set sourceArn(value: string);
    resetSourceArn(): void;
    get sourceArnInput(): string | undefined;
    private _statementId?;
    get statementId(): string;
    set statementId(value: string);
    resetStatementId(): void;
    get statementIdInput(): string | undefined;
    private _statementIdPrefix?;
    get statementIdPrefix(): string;
    set statementIdPrefix(value: string);
    resetStatementIdPrefix(): void;
    get statementIdPrefixInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
