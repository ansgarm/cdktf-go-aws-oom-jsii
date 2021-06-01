import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSsmParameterConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_parameter.html#name DataAwsSsmParameter#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_parameter.html#with_decryption DataAwsSsmParameter#with_decryption}.
     */
    readonly withDecryption?: boolean;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ssm_parameter.html aws_ssm_parameter}.
 */
export declare class DataAwsSsmParameter extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ssm_parameter.html aws_ssm_parameter} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsSsmParameterConfig);
    get arn(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get type(): string;
    get value(): string;
    get version(): number;
    private _withDecryption?;
    get withDecryption(): boolean;
    set withDecryption(value: boolean);
    resetWithDecryption(): void;
    get withDecryptionInput(): boolean | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
