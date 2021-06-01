import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EmrSecurityConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_security_configuration.html#configuration EmrSecurityConfiguration#configuration}.
     */
    readonly configuration: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_security_configuration.html#name EmrSecurityConfiguration#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_security_configuration.html#name_prefix EmrSecurityConfiguration#name_prefix}.
     */
    readonly namePrefix?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_security_configuration.html aws_emr_security_configuration}.
 */
export declare class EmrSecurityConfiguration extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/emr_security_configuration.html aws_emr_security_configuration} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: EmrSecurityConfigurationConfig);
    private _configuration;
    get configuration(): string;
    set configuration(value: string);
    get configurationInput(): string;
    get creationDate(): string;
    get id(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
