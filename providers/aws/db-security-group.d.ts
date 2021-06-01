import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DbSecurityGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_security_group.html#description DbSecurityGroup#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_security_group.html#name DbSecurityGroup#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_security_group.html#tags DbSecurityGroup#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_security_group.html#tags_all DbSecurityGroup#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * ingress block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_security_group.html#ingress DbSecurityGroup#ingress}
     */
    readonly ingress: DbSecurityGroupIngress[];
}
export interface DbSecurityGroupIngress {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_security_group.html#cidr DbSecurityGroup#cidr}.
     */
    readonly cidr?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_security_group.html#security_group_id DbSecurityGroup#security_group_id}.
     */
    readonly securityGroupId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_security_group.html#security_group_name DbSecurityGroup#security_group_name}.
     */
    readonly securityGroupName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_security_group.html#security_group_owner_id DbSecurityGroup#security_group_owner_id}.
     */
    readonly securityGroupOwnerId?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_security_group.html aws_db_security_group}.
 */
export declare class DbSecurityGroup extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_security_group.html aws_db_security_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DbSecurityGroupConfig);
    get arn(): string;
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
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _ingress;
    get ingress(): DbSecurityGroupIngress[];
    set ingress(value: DbSecurityGroupIngress[]);
    get ingressInput(): DbSecurityGroupIngress[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
