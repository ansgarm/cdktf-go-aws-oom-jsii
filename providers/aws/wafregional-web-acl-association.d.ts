import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WafregionalWebAclAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl_association.html#resource_arn WafregionalWebAclAssociation#resource_arn}.
     */
    readonly resourceArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl_association.html#web_acl_id WafregionalWebAclAssociation#web_acl_id}.
     */
    readonly webAclId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl_association.html aws_wafregional_web_acl_association}.
 */
export declare class WafregionalWebAclAssociation extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl_association.html aws_wafregional_web_acl_association} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: WafregionalWebAclAssociationConfig);
    get id(): string;
    private _resourceArn;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string;
    private _webAclId;
    get webAclId(): string;
    set webAclId(value: string);
    get webAclIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
