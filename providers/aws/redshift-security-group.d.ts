import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RedshiftSecurityGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_security_group.html#description RedshiftSecurityGroup#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_security_group.html#name RedshiftSecurityGroup#name}.
     */
    readonly name: string;
    /**
     * ingress block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_security_group.html#ingress RedshiftSecurityGroup#ingress}
     */
    readonly ingress: RedshiftSecurityGroupIngress[];
}
export interface RedshiftSecurityGroupIngress {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_security_group.html#cidr RedshiftSecurityGroup#cidr}.
     */
    readonly cidr?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_security_group.html#security_group_name RedshiftSecurityGroup#security_group_name}.
     */
    readonly securityGroupName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_security_group.html#security_group_owner_id RedshiftSecurityGroup#security_group_owner_id}.
     */
    readonly securityGroupOwnerId?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_security_group.html aws_redshift_security_group}.
 */
export declare class RedshiftSecurityGroup extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/redshift_security_group.html aws_redshift_security_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: RedshiftSecurityGroupConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _ingress;
    get ingress(): RedshiftSecurityGroupIngress[];
    set ingress(value: RedshiftSecurityGroupIngress[]);
    get ingressInput(): RedshiftSecurityGroupIngress[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
